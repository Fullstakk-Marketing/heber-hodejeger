import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'kundehistorie',        
  title: 'Kundehistorier',    
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Tekst',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Navn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'jobTitle',
      title: 'Tittel / Rolle',
      type: 'string',
    }),

    defineField({
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      description: 'Bruk 1, 2, 3… for å styre rekkefølgen på nettsiden',
    }),
  ],
})