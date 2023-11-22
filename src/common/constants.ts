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

const test = {
  "modelId": "cohere.command-text-v14",
  "contentType": "application/json",
  "accept": "*/*",
  "body": {
    "prompt": "Write a LinkedIn post about starting a career in tech:",
    "max_tokens": 100,
    "temperature": 0.8,
    "return_likelihood": "GENERATION"
  } 
}