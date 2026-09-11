import spamImage from '../assets/projects/spam.png'
import houseImage from '../assets/projects/house.png'
import fakeNewsImage from '../assets/projects/fake-news.png'
import expenseImage from '../assets/projects/expense.png'
import shopLedgerImage from '../assets/projects/shopledger.png'

export interface Project {
  id: number
  number: string
  category: string
  name: string
  description: string
  stack: string[]
  href: string
  github: string
  image: string
  tag: string
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    category: 'Machine Learning',
    name: 'Email Spam Classifier',
    description:
      'A machine learning model that classifies emails as spam or legitimate using NLP techniques. Includes text preprocessing, TF-IDF vectorization, model training, and real-time prediction.',
    stack: [
      'Python',
      'scikit-learn',
      'Pandas',
      'NLP',
    ],
    image: spamImage,
    href: 'https://github.com/MHAMZA293/email-spam-classifier',
    github: 'https://github.com/MHAMZA293/email-spam-classifier',
    tag: '#MachineLearning',
  },

  {
    id: 2,
    number: '02',
    category: 'Machine Learning',
    name: 'House Price Prediction',
    description:
      'A regression-based system that predicts house prices using location, area, and number of rooms. Includes preprocessing, feature engineering, evaluation, and Flask API.',
    stack: [
      'Python',
      'Flask',
      'scikit-learn',
      'Pandas',
    ],
    image: houseImage,
    href: 'https://github.com/MHAMZA293/house-price-prediction',
    github: 'https://github.com/MHAMZA293/house-price-prediction',
    tag: '#MachineLearning',
  },

  {
    id: 3,
    number: '03',
    category: 'Machine Learning',
    name: 'Fake News Identifier',
    description:
      'An NLP-powered machine learning application that detects whether a news article is real or fake using text processing and classification algorithms.',
    stack: [
      'Python',
      'scikit-learn',
      'Pandas',
      'NLP',
    ],
    image: fakeNewsImage,
    href: 'https://github.com/MHAMZA293',
    github: 'https://github.com/MHAMZA293',
    tag: '#NLP',
  },

  {
    id: 4,
    number: '04',
    category: 'Application Development',
    name: 'AI Expense Manager',
    description:
      'A Flutter application that tracks expenses, categorizes transactions, visualizes spending trends, and provides AI-powered budgeting insights.',
    stack: [
      'Flutter',
      'Dart',
      'Firebase',
      'Python',
    ],
    image: expenseImage,
    href: 'https://github.com/MHAMZA293/ai-expense-manager',
    github: 'https://github.com/MHAMZA293/ai-expense-manager',
    tag: '#Flutter',
  },

  {
    id: 5,
    number: '05',
    category: 'Web Development',
    name: 'ShopLedger Pro',
    description:
      'Inventory and billing management system for small businesses with product management, sales tracking, invoices, and admin dashboard.',
    stack: [
      'PHP',
      'MySQL',
      'Bootstrap',
      'JavaScript',
    ],
    image: shopLedgerImage,
    href: 'https://github.com/MHAMZA293/rental-shop-management',
    github: 'https://github.com/MHAMZA293/rental-shop-management',
    tag: '#WebDevelopment',
  },
]