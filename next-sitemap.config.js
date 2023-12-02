/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.oskarkwasniewski.dev',
    generateRobotsTxt: true,
    robotsTxtOptions: { 
       policies: [
        {
            userAgent: '*',
            allow: '/api/og/*'
        }
       ]
    }
}