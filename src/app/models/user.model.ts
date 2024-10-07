export interface User {
  id: number;
  name: string;
  occupation: string;
  premium: boolean;
  verified: boolean;
  imageUrls: string[];
  age: number | string;
  height: number | string;
  religion: string;
  city: string;
  state: string;
  country: string;
}

export const USERS: User[] = [
  {
    id: 1,
    name: 'Anupama Parameswaran',
    occupation: 'Software Engineer',
    premium: true,
    verified: true,
    imageUrls: ['anu_1.jpg', 'anu_2.jpg', 'anu_3.jpg', 'anu_4.jpg'],
    age: '25 Yrs',
    height: '5 ft 8 in',
    religion: 'Hindu',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  },
  {
    id: 2,
    name: 'Nazriya Nazim',
    occupation: 'Software Engineer',
    premium: false,
    verified: true,
    imageUrls: ['naz_1.jpg', 'naz_2.jpg', 'naz_3.jpg', 'naz_4.jpg'],
    age: '25 Yrs',
    height: '5 ft 8 in',
    religion: 'Hindu',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  },
  {
    id: 3,
    name: 'Nayanthara',
    occupation: 'Software Engineer',
    premium: false,
    verified: false,
    imageUrls: ['nayan_1.jpg', 'nayan_2.jpg', 'nayan_3.jpg', 'nayan_4.jpg'],
    age: '25 Yrs',
    height: '5 ft 8 in',
    religion: 'Hindu',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  },
  {
    id: 4,
    name: 'Samantha Ruth Prabhu ',
    occupation: 'Software Engineer',
    premium: true,
    verified: true,
    imageUrls: ['sam_1.jpg', 'sam_2.jpg', 'sam_3.jpg', 'sam_4.jpg'],
    age: '25 Yrs',
    height: '5 ft 8 in',
    religion: 'Christian',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  },
  {
    id: 5,
    name: 'Kajal Aggarwal',
    occupation: 'Software Engineer',
    premium: false,
    verified: true,
    imageUrls: ['kajal_1.jpg', 'kajal_2.jpg', 'kajal_3.jpg', 'kajal_4.jpg'],
    age: '25 Yrs',
    height: '5 ft 8 in',
    religion: 'Muslim',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  },
];
