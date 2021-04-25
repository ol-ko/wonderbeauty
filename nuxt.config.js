import glob from 'glob';
import path from 'path';
import fs from 'fs';

import * as SITE_INFO from './assets/content/site/info.json'
import { locales, defaultLocale, messages } from './locales';

const dynamicContentPath = 'assets/content'

function getDynamicPaths(urlFilepathTable, cwdPath) {
  console.log('Going to generate dynamicRoutes for these collection types: ', urlFilepathTable)
  const dynamicPaths = [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url]
      return glob.sync(filepathGlob, { cwd: cwdPath }).map(filepath => {
        return `/${url}/${path.basename(filepath, '.json')}`
      })
    })
  )
  console.log('Found these dynamicPaths that will be SSR generated:', dynamicPaths)
  return dynamicPaths
}

const serviceCategoriesGlob = 'service_category_pages/en/*.json';

function getCategoriesForLocale(locale) {
  const directory = 'assets/content/service_category_pages';
  return fs.readdirSync(path.resolve(`${directory}/${locale}`))
    .filter(name => path.extname(name) === '.json')
    .map(name => require(path.resolve(`${directory}/${locale}/${name}`)))
    .sort((a, b) =>  a.order - b.order)
}

const categories = {
  en: getCategoriesForLocale('en'),
  de: getCategoriesForLocale('de'),
  ru: getCategoriesForLocale('ru')
}

const dynamicRoutes = getDynamicPaths(
  {
    services: serviceCategoriesGlob
  },
  dynamicContentPath
)

const staticRoutes = [
  '/services'
]

const languagePrefixedRoutes = locales.map(locale =>
  [...dynamicRoutes, ...staticRoutes].map(route =>
    `${locale === defaultLocale ? '' : '/' + locale}${route}`
  )
).flat();

export default {
  target: 'static',
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-US',
    categories
  },
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css?family=Merriweather:400,900&display=swap&subset=cyrillic',
        rel: 'stylesheet'
      }
    ]
  },
  generate: {
    routes: languagePrefixedRoutes,
    crawler: false
  },
  buildModules: ['@nuxtjs/svg', '@nuxtjs/pwa'],
  modules: ['@nuxtjs/markdownit', 'nuxt-i18n'],
  plugins: ['~/plugins/categories.js'],
  markdownit: {
    injected: true
  },
  i18n: {
    locales,
    defaultLocale,
    vueI18n: {
      fallbackLocale: defaultLocale,
      messages
    }
  },
  build: {
    extractCSS: true,
    extend(config, ctx) {}
  },
  css: [
    '@/assets/css/main.scss'
  ]
}
