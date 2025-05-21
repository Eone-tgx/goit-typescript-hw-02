export interface Image {
  id: string;
  alt_description: string;
  description?: string;
  urls: {
    small: string;
    full: string;
  };
}
