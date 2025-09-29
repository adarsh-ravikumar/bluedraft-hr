import dedicatedPartnershipImage from '../../assets/images/choices/dedicated_partnership.png'
import flexibleWorkspaceImage from '../../assets/images/choices/flexible_workspace_scaling.png'
import guaranteedSafetyImage from '../../assets/images/choices/guaranteed_safety.png'
import provenTrackRecordImage from '../../assets/images/choices/proven_track_record.png'
import specializedIndustryFocusImage from '../../assets/images/choices/specialized_industry_focus.png'

interface Choice {
  title: string
  description: string
  image: string
  className: string
}

export const whyChooseUs: Choice[] = [
  {
    title: 'Specialized Industry Focus',
    description:
      'We speak your language. Our expertise is focused exclusively on **Technical Maintenance, HSE, and Industrial Operations**, ensuring we provide the right fit, not just a hire.',
    image: specializedIndustryFocusImage,
    className: 'choice-1',
  },
  {
    title: 'Guaranteed Reliability & Safety',
    description:
      'We prioritize your safety and compliance. Every professional is rigorously vetted for technical expertise and adherence to the strictest **HSE protocols** to minimize your risk.',
    image: guaranteedSafetyImage,
    className: 'choice-2',
  },
  {
    title: 'Flexible Workforce Scaling',
    description:
      'Scale your team with agility. We provide seamless **Contract and Permanent Staffing** solutions to match your workforce needs instantly without heavy overhead.',
    image: flexibleWorkspaceImage,
    className: 'choice-3',
  },
  {
    title: 'Proven Track Record',
    description:
      'Trust in demonstrated success. We deliver **high-quality, vetted talent** that integrates smoothly and drives immediate productivity improvements in challenging industrial settings.',
    image: provenTrackRecordImage,
    className: 'choice-4',
  },
  {
    title: 'Dedicated Partnership',
    description:
      'Expect more than just a placement. We offer continuous support, performance monitoring, and **dedicated account management** for the long-term success of your team.',
    image: dedicatedPartnershipImage,
    className: 'choice-5',
  },
]
