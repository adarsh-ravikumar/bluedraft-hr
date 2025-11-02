interface Skill {
  id: number
  name: string
}

interface TrendingSkillSets {
  title: string
  skillSets: Skill[]
}

export const industry: TrendingSkillSets[] = [
  {
    title: 'New-Tech',
    skillSets: [
      { id: 1, name: 'Golang Developer' },
      { id: 2, name: 'Xamarin Developer' },
      { id: 3, name: 'AEM Developer' },
      { id: 4, name: 'Blue Yonder' },
      { id: 5, name: 'Mern Stack Developer' },
    ],
  },
  {
    title: 'Cloud Computing',
    skillSets: [
      { id: 6, name: 'Cloud Security Engineer' },
      { id: 7, name: 'Azure Data Engineer' },
      { id: 8, name: 'Azure PAAS Engineer' },
      { id: 9, name: 'AWS Cloud Engineer' },
      { id: 10, name: 'Cloud Automation Engineer' },
    ],
  },
  {
    title: 'SAP',
    skillSets: [
      { id: 11, name: 'SAP HCM' },
      { id: 12, name: 'SAP CPI' },
      { id: 13, name: 'SAP ABAP HANA' },
      { id: 14, name: 'SAP ARIBA' },
      { id: 15, name: 'SAP FICO HANA' },
    ],
  },
  {
    title: 'Salesforce',
    skillSets: [
      { id: 16, name: 'SFMC Developer' },
      { id: 17, name: 'SFDC Developer' },
      { id: 18, name: 'Salesforce CPQ' },
      { id: 19, name: 'SFDC LWC Developer' },
      { id: 20, name: 'Salesforce Vlocity' },
    ],
  },
]
