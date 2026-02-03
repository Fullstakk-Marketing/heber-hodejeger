import { defineType, defineField } from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string'
    }),
    defineField({
      name: 'heading1',
      title: 'Title (Heading 1)',
      type: 'string'
    }),
    defineField({
  name: 'leadText',
  title: 'Lead Text (Ingress)',
  type: 'array',
  of: [
    {
      type: 'block',
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      styles: [{title: 'Normal', value: 'normal'},
               {title: 'Quote', value: 'blockquote'},
              ],
    },
  ],
}),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image'
    })
  ]
})