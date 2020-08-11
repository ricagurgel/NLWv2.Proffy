/*const subjects = [
      "Artes",
      "Biologia",
      "Ciências",
      "Educação Física",
      "Física",
      "Geografoa",
      "História",
      "Matemática",
      "Português",
      "Química"
]*/
const subjects = [
      "Node.js",
      "Javascript",
      "Python",
      "SQL",
      "C#",
      "Angular",
      "React",
      "React Native",
      "Segurança de dados",
      "Cobol"
]

const weekdays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
]

const proffys = [
      {
            name: "Ricardo Gurgel",
            avatar: "https://avatars0.githubusercontent.com/u/7705137?s=460&u=df4f7d2efab659c94a9bd2d4e1e59d862d8e2145&v=4",
            whatsapp: "11 9928-20398",
            bio: "jk sadasd kjasd as djkas djk sdajsk kd akj dakj djkad jkasjksa dk asdjkasdjasdas dkas djad<br>hfs hdf dsf shdf jhsd fsdf hjsd fhjsdfhjs f",
            subject: "3",
            cost: 20,
            weekday: [0],
            time_from: [720],
            time_to: [1220]
      },
      {
            name: "Daniele",
            avatar: "https://avatars0.githubusercontent.com/u/7705137?s=460&u=df4f7d2efab659c94a9bd2d4e1e59d862d8e2145&v=4",
            whatsapp: "11 9928-20398",
            bio: "Para saber a verdade sadasd kjasd as djkas djk sdajsk kd akj dakj djkad jkasjksa dk asdjkasdjasdas dkas djad<br>hfs hdf dsf shdf jhsd fsdf hjsd fhjsdfhjs f",
            subject: "1",
            cost: 30,
            weekday: [3],
            time_from: [920],
            time_to: [1220]
      },
      {
            name: "Dornele Rodrigues",
            avatar: "https://avatars0.githubusercontent.com/u/7705137?s=460&u=df4f7d2efab659c94a9bd2d4e1e59d862d8e2145&v=4",
            whatsapp: "11 9928-20398",
            bio: "Para saber a verdade sadasd kjasd as djkas djk sdajsk kd akj dakj djkad jkasjksa dk asdjkasdjasdas dkas djad<br>hfs hdf dsf shdf jhsd fsdf hjsd fhjsdfhjs f",
            subject: "0",
            cost: 200,
            weekday: [3],
            time_from: [920],
            time_to: [1220]
      }
]

function timeToInt(time) {
      const [hours, minutes] = time.split(":")
      t = parseInt((hours * 60),10) + parseInt(minutes,10)
      return Number(t)
}

module.exports = {
      subjects,
      weekdays,
      proffys,
      timeToInt
}
