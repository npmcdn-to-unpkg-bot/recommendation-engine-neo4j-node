USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM 'file:/home/tobin/Projects/lighthouse/recomendation-engine/react-simple-boilerplate/db/2016-Stack-Overflow-Survey-Responses-all-data-in-single-row.csv' AS line
CREATE (:Origin{
  country: line.country,
  un_subregion: line.un_subregion,
  so_region: line.so_region,
  big_mac_index: line.big_mac_index,
  collector: line.collector
}),
(:Developer {
  responder: line.responder,
  age_range: line.age_range,
  age_midpoint: toFloat(line.age_midpoint),
  gender: line.gender,
  experience_range: line.experience_range,
  experience_midpoint: toFloat(line.experience_midpoint),
  salary_range: line.salary_range,
  salary_midpoint: toFloat(line.salary_midpoint),
  programming_ability: line.programming_ability,
  employment_status: line.employment_status,
  remote: line.remote,
  dev_environment: line.dev_environment,
  desktop_os: line.desktop_os
}),
(:Self_ID {
  name: line.self_identification_1
}),
(:Skill {
  name: line.tech_want_1
}),
(:Job {
  name: line.occupation,
  industry: line.industry,
  company_size_range: line.company_size_range,
  team_size_range: line.team_size_range,
  women_on_team: toFloat(line.women_on_team)
});

CREATE INDEX ON :Developer(developerID);
CREATE INDEX ON :Origin(originID);
CREATE INDEX ON :Self_ID(self_ID);
CREATE INDEX ON :Skill(skillID);
CREATE INDEX ON :Job(jobID);

USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM 'file:/home/tobin/Projects/lighthouse/recomendation-engine/react-simple-boilerplate/db/2016-Stack-Overflow-Survey-Responses-all-data-in-single-row.csv' AS line
MATCH (dev:Developer {responder: line.responder})
MATCH (o:Origin { country: line.country,
                  un_subregion: line.un_subregion,
                  so_region: line.so_region,
                  big_mac_index: line.big_mac_index,
                  collector: line.collector
                  })
MERGE (dev)-[:originates_from]->(o)
