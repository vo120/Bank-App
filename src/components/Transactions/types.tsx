export interface TransactionProps {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  art: {
    icon: string;
    background: string;
  };
}

export interface TransactionSectionProps {
  data: Array<TransactionProps>;
}

export interface TransactionAvatarProps {
  icon: any;
  background: string;
}
