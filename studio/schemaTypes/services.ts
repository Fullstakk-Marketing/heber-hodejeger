import { defineType, defineField } from 'sanity'

export const servicesType = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service name',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    }),  defineField({
  name: 'description',
  title: 'description',
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
})
  ]
})