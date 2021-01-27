export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6011f25ebec58810147fa45f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-sva1pysi',
                  apiId: 'dbaef8d4-4328-4753-abbb-3624a5fbf43b'
                },
                {
                  buildHookId: '6011f25e2e95d40e8f664261',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-48fykak3',
                  apiId: 'f9d40c7a-7a00-4dd9-a495-f203daf4e721'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ascooper01/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-48fykak3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
