export interface Professional {
  id: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  imageUrl: string;
  isDirector?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}