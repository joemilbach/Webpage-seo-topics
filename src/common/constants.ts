import { NavProps, WorkCardProps, ProjectCardProps, ContactNavProps } from '@component/common/types'

export const navList: NavProps[] = [{
  name: 'about',
  label: 'About',
  url: '/about'
},{
  name: 'work',
  label: 'Work',
  url: '/work'
},{
  name: 'contact',
  label: 'Contact',
  url: '/contact'
}]

export const screenshotsPath = '/img/screenshots/'

export const workCardList: WorkCardProps[] = [{
  uid: 'work-alluma',
  title: 'Alluma',
  image: [{
    src: 'Alluma@0.5x.webp',
    width: 484,
    height: 1067
  },{
    src: 'Alluma.webp',
    width: 968,
    height: 2135
  },{
    src: 'Alluma@2x.webp',
    width: 1936,
    height: 4270
  }],
  url: 'https://www.allumaco.com/',
  description: 'Alluma is a Pharmacy Benefits Illuminator, negotiating for their clients. I designed their new site based on their brand standards. We grew the site from a single landing page, capturing emails to full informational site for multiple audiences.',
  services: ['Growth Driven Design', 'Web Site Design', 'Hubspot Template & Custom Modules', 'Responsive Graphical Elements']
},{
  uid: 'work-wbi',
  title: 'Well-Being Index (WBI)',
  image: [{
    src: 'Well-Being-Index@0.5x.webp',
    width: 484,
    height: 573
  },{
    src: 'Well-Being-Index.webp',
    width: 968,
    height: 1146
  },{
    src: 'Well-Being-Index@2x.webp',
    width: 1936,
    height: 2292
  }],
  url: 'https://demo.mywellbeingindex.org/admin/dashboard',
  description: 'The WBI app is an anonymous, online assessment tool that evaluates distress. I Quickly implementing complex new functionality utilizing rapid prototyping in the scrum framework. Oversaw UI/UX while revisions were made.',
  services: ['Agile/Scrum', 'Rapid Prototyping', 'UI/UX', 'Mobile App Design']
},{
  uid: 'work-rpu',
  title: 'Rochester Public Utilities (RPU)',
  image: [{
    src: 'RPU@0.5x.webp',
    width: 484,
    height: 698
  },{
    src: 'RPU.webp',
    width: 968,
    height: 1397
  },{
    src: 'RPU@2x.webp',
    width: 1936,
    height: 2794
  }],
  url: 'https://www.rpu.org/',
  description: 'RPU is a municipally-owned electric and water utility located in Rochester, MN. I used Growth-Driven Design to continually improve the user experience of the site. We implemented smart form on the site to effectively manage user communication.',
  services: ['Growth-Driven Design', 'Web Site Design', 'Proprietary CMS Templates', 'Custom Coding (PHP & JavaScipt)']
},{
  uid: 'work-vital-work-life',
  title: 'VITAL Work Life',
  image: [{
    src: 'Vital-Work-Life@0.5x.webp',
    width: 484,
    height: 970
  },{
    src: 'Vital-Work-Life.webp',
    width: 968,
    height: 1940
  },{
    src: 'Vital-Work-Life@2x.webp',
    width: 1936,
    height: 3880
  }],
  url: 'https://www.vitalworklife.com/',
  description: 'VITAL Work Life consults and counsels employee\'s well being and improve organizational culture. I designed and built out a responsive, user-centered Hubspot Template. They were also given a templated.',
  services: ['Hubspot Template & Custom Modules', 'Custom Blog & Event Templates', 'User-Centered Design', 'Lead Generation Landing Pages']
},{
  uid: 'work-innovation-exchange',
  title: 'Innovation Exchange',
  image: [{
    src: 'Innovation-Exchange@0.5x.webp',
    width: 484,
    height: 1188
  },{
    src: 'Innovation-Exchange.webp',
    width: 968,
    height: 2376
  },{
    src: 'Innovation-Exchange@2x.webp',
    width: 1936,
    height: 4752
  }],
  url: 'https://innovationexchange.mayoclinic.org/',
  description: 'Mayo Clinic Innovation Exchange provides medical insight for startup to accelerate commercialization. I designed the Wordpress template in accordance with Mayo\'s new brand standards. I extended the functionality of the template allowing for more functionality and easier content management.',
  services: ['Web Site Design Following Brand Standards', 'Wordpress Customization', 'Custom Template Module Functionality', 'Content Management Training']
},{
  uid: 'work-top-gun',
  title: 'Top Gun Guide Service',
  image: [{
    src: 'Top-Gun@0.5x.webp',
    width: 484,
    height: 800
  },{
    src: 'Top-Gun.webp',
    width: 968,
    height: 1600
  },{
    src: 'Top-Gun@2x.webp',
    width: 1936,
    height: 3200
  }],
  url: 'http://www.topgunguideservice.com/',
  description: 'Top Gun Guide Service provides world class Spring Snow Goose and Waterfowl Hunting experiences. I designed Their brand new site utilizing rugged, stunning imagery and targeted messaging. We created a smart contact form for better customer management.',
  services: ['Responsive Web Site Design', 'Proprietary CMS Templates', 'Custom Coding (PHP & JavaScipt)', 'Content Management Training']
}]

export const projectCardList: ProjectCardProps[] = [{
  uid: 'project-weather',
  title: 'Weather Forecast',
  image: [{
    src: 'Weather-Forecast@0.5x.webp',
    width: 484,
    height: 305
  },{
    src: 'Weather-Forecast.webp',
    width: 968,
    height: 610
  },{
    src: 'Weather-Forecast@2x.webp',
    width: 1936,
    height: 2440
  }],
  url: 'http://www.joemilbach.me/weather/'
}]

export const contactNav: ContactNavProps[] = [{
  uid: 'contact-mail',
  url: 'mailto:joemilbach@gmail.com',
  label: 'Email me',
  icn: {
    name: 'email',
    type: 'icn',
    width: 16,
    height: 16,
    role: 'img'
  }
},{
  uid: 'contact-phone',
  url: 'tel:15073164658',
  label: 'Call me',
  icn: {
    name: 'phone',
    type: 'icn',
    width: 16,
    height: 16,
    role: 'img'
  }
},{
  uid: 'contact-facebook',
  url: 'https://www.facebook.com/joemilbach',
  label: 'Find me on Facebook',
  icn: {
    name: 'facebook',
    type: 'icn',
    width: 448,
    height: 512,
    role: 'img'
  },
  targetBlank: true
},{
  uid: 'contact-linkedin',
  url: 'http://www.linkedin.com/in/joemilbach',
  label: 'Connect with me on LinkedIn',
  icn: {
    name: 'linkedin',
    type: 'icn',
    width: 448,
    height: 512,
    role: 'img'
  },
  targetBlank: true
}]

export const error = {
  locationNoReturn: 'Location Unknown',
}