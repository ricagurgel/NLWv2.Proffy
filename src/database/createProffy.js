module.exports = async function (db, {proffyValue, classValue, classScheduleValue}){
      //inserir dados
      const insertedProffy = await db.run(`
            INSERT INTO proffys (
                  name,
                  avatar,
                  whatsapp,
                  bio
            ) VALUES(
                  "${proffyValue.name}",
                  "${proffyValue.avatar}",
                  "${proffyValue.whatsapp}",
                  "${proffyValue.bio}"
            );
      `
      ) 

      // inserir classes
      const proffy_id = insertedProffy.lastID
      const insertedClass = await db.run(`
            INSERT INTO classes (
                  subject,
                  cost,
                  proffy_id
            ) VALUES(
                  "${classValue.subject}",
                  "${classValue.cost}",
                  "${proffy_id}"
            );
      `)


      // inserir schedule
      const class_id = insertedClass.lastID
      const insertedAllClassesScheduleValues = classScheduleValue.map((thisSchedule) => {
            return db.run(`
                  INSERT INTO class_schedule (
                        class_id,
                        weekday,
                        time_from,
                        time_to
                  ) VALUES (
                        "${class_id}",
                        "${thisSchedule.weekday}",
                        "${thisSchedule.time_from}",
                        "${thisSchedule.time_to}"
                  );
            `)
            })

            // executar todos dbrun
      await Promise.all(insertedAllClassesScheduleValues)
      

}