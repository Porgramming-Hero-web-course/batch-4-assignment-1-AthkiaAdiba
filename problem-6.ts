
interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (obj: Profile, updates: Partial<Profile>): Profile => {
    return { ...obj, ...updates };
}