//liste d'objet qui contienne mes todo
export const listToDo = [
  {
    index: 1,
    title: "Titre 1",
    date: new Date(2023, 7, 22).toISOString().slice(0, 10).replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: false,
    active: true,
  },
  {
    index: 2,
    title: "Titre 2",
    date: new Date(2023, 5, 17).toISOString().slice(0, 10).replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: false,
    active: true,
  },
  {
    index: 3,
    title: "Titre 3",
    date: new Date(2023, 6, 6).toISOString().slice(0, 10).replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: false,
    active: true,
  },
  {
    index: 4,
    title: "Titre 4",
    date: new Date(2023, 9, 14).toISOString().slice(0, 10).replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: false,
    active: true,
  },
  {
    index: 5,
    title: "Titre 5",
    date: new Date(2023, 11, 23)
      .toISOString()
      .slice(0, 10)
      .replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: false,
    active: true,
  },
  {
    index: 6,
    title: "Titre 6",
    date: new Date(2023, 10, 1).toISOString().slice(0, 10).replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: false,
    active: true,
  },
  {
    index: 7,
    title: "Titre 7",
    date: new Date(2023, 6, 30).toISOString().slice(0, 10).replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: false,
    active: true,
  },
  {
    index: 8,
    title: "Titre 8",
    date: new Date(2023, 3, 7).toISOString().slice(0, 10).replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: true,
    active: true,
  },
  {
    index: 9,
    title: "Titre 9",
    date: new Date(2023, 2, 15).toISOString().slice(0, 10).replaceAll("/", "-"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus justo tortor, a euismod tellus rhoncus  rutrum.",
    accomplished: true,
    active: true,
  },
];