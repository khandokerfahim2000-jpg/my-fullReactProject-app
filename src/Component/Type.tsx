export default interface ICard {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export interface ApiProps {
  onAddstack: (technology: string) => void;
}
