export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60b48152c4a6b5a5a2f3ac01',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y33nf388',
                  apiId: 'e99b4ae0-2d76-4451-9d02-b7d6db0749e1'
                },
                {
                  buildHookId: '60b4815234bb14d222b55cbe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tbanc4e1',
                  apiId: 'b7f011e4-65fd-4369-8674-5b95660a3676'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amh22/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tbanc4e1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
