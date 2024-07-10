import  { createContext, useContext, useState,  } from "react";

// Define the interface for a Person
export interface Person {
  prof: string;
  isMarried: boolean;
  Year: number;
}

// Define the interface for the context
interface PersonContextType {
  persons: Person[] | null;
  addPerson: (person: Person) => void;
  updatePerson: (id: string, updatedPerson: Person) => void;
  deletePerson: (id: string) => void;
}

//initalize the contexttype value
const initailvalues = {
    persons: null,
    addPerson: () => null,
    updatePerson: () => null,
    deletePerson: () => null
}

const useContext = createContext<PersonContextType>(initailvalues)

interface Props {
  children: React.ReactNode;
}

export const PersonProvider = (props : Props) => {
  return ( <>
  {props.children}
  </>)
}
