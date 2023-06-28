export interface CharacterAngularInterface {
 id: string;
 name: string;
 href: string;
 image: string;
}

export interface CharacterApiResponseInterface {
  pageable: {
    currentPage: number;
    elementsOnPage: number;
    nextPage: string;
    previousPage: string;
    totalElements: number;
    totalPages: number;
  };
  content: CharacterAngularInterface[];
}


