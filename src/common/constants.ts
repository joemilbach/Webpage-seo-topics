import { NavProps, ContactNavProps } from '@component/common/types'

export const navList: NavProps[] = [{
  uid: 'dashboard',
  label: 'Dashboard',
  url: '/dashboard',
  icn: {
    name: 'dashboard',
    type: 'icn',
    width: 16,
    height: 16,
    role: 'img'
  }
},{
  uid: 'social-media',
  label: 'Topic Generation',
  displayHeading: 'Topic Generation',
  displayBody: 'Give Marky a URL or text document and have him give you some blog or social media topics.',
  url: '/social-media',
  icn: {
    name: 'list',
    type: 'icn',
    width: 16,
    height: 16,
    role: 'img'
  }
},{
  uid: 'html',
  label: 'HTML Generation',
  displayHeading: 'HTML Generation',
  displayBody: 'Upload a Word document and Marky will turn that into HTML for you.',
  url: '/html',
  icn: {
    name: 'coding',
    type: 'icn',
    width: 16,
    height: 16,
    role: 'img'
  }
},{
  uid: 'translate',
  label: 'Language Translation',
  displayHeading: 'Translations',
  displayBody: 'Marky can translate provide you translations from any language to any language of your choice',
  url: '/translate',
  icn: {
    name: 'translate',
    type: 'icn',
    width: 16,
    height: 16,
    role: 'img'
  }
}]

export const screenshotsPath = '/img/screenshots/'

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

export const awsRegion = [
  'us-east-1',
  'us-east-2',
  'us-west-1',
  'us-west-2'
]

export const bedrockModelID = [
  'amazon.nova-pro-v1:0',
  'cohere.command-r-v1:0',
  'arn:aws:bedrock:us-east-1:836473520561:inference-profile/us.meta.llama3-2-1b-instruct-v1:0'
]

export const languages = [
  'English',
  'Arabic',
  'Chinese (Simplified)',
  'Chinese (Traditional)',
  'French',
  'German',
  'Japanese',
  'Portuguese (Portugal, Brazil)',
  'Russian',
  'Spanish',
  'Vietnamese',
  'Afrikaans',
  'Albanian',
  'Amharic',
  'Armenian',
  'Assamese',
  'Aymara',
  'Azerbaijani',
  'Bambara',
  'Basque',
  'Belarusian',
  'Bengali',
  'Bhojpuri',
  'Bosnian',
  'Bulgarian',
  'Catalan',
  'Cebuano',
  'Corsican',
  'Croatian',
  'Czech',
  'Danish',
  'Dhivehi',
  'Dogri',
  'Dutch',
  'Esperanto',
  'Estonian',
  'Ewe',
  'Filipino (Tagalog)',
  'Finnish',
  'Frisian',
  'Galician',
  'Georgian',
  'Greek',
  'Guarani',
  'Gujarati',
  'Haitian Creole',
  'Hausa',
  'Hawaiian',
  'Hebrew',
  'Hindi',
  'Hmong',
  'Hungarian',
  'Icelandic',
  'Igbo',
  'Ilocano',
  'Indonesian',
  'Irish',
  'Italian',
  'Javanese',
  'Kannada',
  'Kazakh',
  'Khmer',
  'Kinyarwanda',
  'Konkani',
  'Korean',
  'Krio',
  'Kurdish',
  'Kurdish (Sorani)',
  'Kyrgyz',
  'Lao',
  'Latin',
  'Latvian',
  'Lingala',
  'Lithuanian',
  'Luganda',
  'Luxembourgish',
  'Macedonian',
  'Maithili',
  'Malagasy',
  'Malay',
  'Malayalam',
  'Maltese',
  'Maori',
  'Marathi',
  'Meiteilon (Manipuri)',
  'Mizo',
  'Mongolian',
  'Myanmar (Burmese)',
  'Nepali',
  'Norwegian',
  'Nyanja (Chichewa)',
  'Odia (Oriya)',
  'Oromo',
  'Pashto',
  'Persian',
  'Polish',
  'Punjabi',
  'Quechua',
  'Romanian',
  'Samoan',
  'Sanskrit',
  'Scots Gaelic',
  'Sepedi',
  'Serbian',
  'Sesotho',
  'Shona',
  'Sindhi',
  'Sinhala (Sinhalese)',
  'Slovak',
  'Slovenian',
  'Somali',
  'Sundanese',
  'Swahili',
  'Swedish',
  'Tagalog (Filipino)',
  'Tajik',
  'Tamil',
  'Tatar',
  'Telugu',
  'Thai',
  'Tigrinya',
  'Tsonga',
  'Turkish',
  'Turkmen',
  'Twi (Akan)',
  'Ukrainian',
  'Urdu',
  'Uyghur',
  'Uzbek',
  'Welsh',
  'Xhosa',
  'Yiddish',
  'Yoruba',
  'Zulu',
]