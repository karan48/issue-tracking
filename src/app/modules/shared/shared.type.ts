export interface user {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Sprint {
  id: number,
  name: string,
  startTime: string,
  endTime: string,
  active: boolean
}

export interface Issue {
  "title": string,
  "sprint": number,
  "id": number
}