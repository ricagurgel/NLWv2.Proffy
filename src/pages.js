const { subjects, weekdays, proffys, timeToInt } = require('./utils/format')
const dataBase = require('./database/db.js')

function pageLanding(req, res) {
      return res.render("index.html")
}

async function pageStudy(req, res) {
      const filters = req.query
      console.log(filters)
      if(!filters.subject && !filters.weekday && !filters.time) {
            console.log('entrou aqui')
            var query = `
                  SELECT classes.*, proffys.*
                  FROM proffys
                  JOIN classes ON (classes.proffy_id = proffys.id)
      `
      } else {
            const timeFilter = timeToInt(filters.time)
            console.log(timeFilter)
            console.log(filters.subject)
            var query = `
                  SELECT classes.*, proffys.*
                  FROM proffys
                  JOIN classes ON (classes.proffy_id = proffys.id)
                        WHERE EXISTS (
                              SELECT class_schedule.*
                              FROM class_schedule
                              WHERE class_schedule.class_id = classes.id` + (filters.weekday>=0 ?
                              ` AND class_schedule.weekday = ${filters.weekday}`:"") + (timeFilter ?
                              ` AND class_schedule.time_from <= ${timeFilter}` +
                              ` AND class_schedule.time_to >= ${timeFilter}` : "")
                        +")" 
                  + (filters.subject >= 0 ? ` AND classes.subject = ${filters.subject}`:"")
      
      }

      try {
            console.log(query)
            const db = await dataBase
            const proffys = await db.all(query)
            
            return res.render("study.html", { proffys, filters, subjects, weekdays })

      } catch (e) {
            console.log(e)
      }

      
}

function pageGiveClasses(req, res) {
      return res.render("give-classes.html", { subjects, weekdays })
}

async function saveClasses(req,res) {
      const createProffy = require('./database/createProffy')
      proffyValue = { 
            name: req.body.name,
            avatar: req.body.avatar,
            whatsapp: req.body.whatsapp,
            bio: req.body.bio

      }

      classValue = {
            subject: req.body.subject,
            cost: req.body.cost
      }

      const classScheduleValue = req.body.weekday.map((weekday, index) => {
            return {
                  weekday,
                  time_from: timeToInt(req.body.time_from[index]), 
                  time_to: timeToInt(req.body.time_to[index])
            }
      })
      try {
            const db = await dataBase
            await createProffy(db, { proffyValue, classValue, classScheduleValue })
            let queryString = "?subject=" + req.body.subject
            queryString += "&weekday=" +req.body.weekday[0]
            queryString += "&time=" +req.body.time_from[0]
            return res.redirect("/study" + queryString)
      } catch (e) {
            console.log(e)
      }
      
      
}

module.exports = {
      pageLanding,
      pageStudy,
      pageGiveClasses,
      saveClasses
}