interface IPerson{
     name: string;
     email: string;
     contact_number: number;
     address?: string;
}

// Pick: pick specific field
type contact_1 = Pick<IPerson, 'contact_number' | 'email'>;

// Omit: get all fields except specific field
type contact_2 = Omit<IPerson, 'name'>;

// Partial: make all fields optional
type contact_3 = Partial<IPerson>;

// Required: make all fields required
type contact_4 = Required<IPerson>;

// Readonly: make all fields readonly
type contact_5 = Readonly<IPerson>;

// Record: create a new object with specific fields
type contact_6 = Record<'name' | 'email', string>;