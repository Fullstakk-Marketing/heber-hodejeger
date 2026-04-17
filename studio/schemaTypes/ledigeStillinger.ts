import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ledigStilling',
  title: 'Ledige stillinger',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'href',
      title: 'Lenke',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilde / logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'imageAlt',
      title: 'Alt-tekst',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      description: '1, 2, 3… for å styre rekkefølgen på nettsiden',
    }),
  ],
})