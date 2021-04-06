const actor = {
    title: "Actor",
    name: "actor",
    type: "document",
    fields: [
        {
        title: "Actor",
        name: "actor",
        type: "string",
        description: "Navnet på skuespiller",
        validation: (Rule) => Rule.required(),
    },
]
}

export default actor