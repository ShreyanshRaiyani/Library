

export interface Resource {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  type: 'book' | 'journal' | 'newspaper' | 'article' | 'gig';
  publishedYear: number;
  publisher?: string;
  language?: string;
  description?: string;
  categories?: string[];
  pages?: number;
  isbn?: string;
  downloadAvailable?: boolean;
  gigDetails?: {
    institution: string;
    accessLevel: 'open' | 'restricted' | 'institutional';
    format: string[];
    citations: number;
    lastUpdated: string;
  };
}

export const books: Resource[] = [
  {
    id: "book-1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    imageUrl: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "book",
    publishedYear: 1960,
    publisher: "J. B. Lippincott & Co.",
    language: "English",
    description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.",
    categories: ["Fiction", "Classic", "Historical"],
    pages: 281,
    isbn: "978-0446310789",
    downloadAvailable: true
  },
  {
    id: "book-2",
    title: "1984",
    author: "George Orwell",
    imageUrl: "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "book",
    publishedYear: 1949,
    publisher: "Secker & Warburg",
    language: "English",
    description: "1984 is a dystopian social science fiction novel and cautionary tale written by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, it centers on the consequences of totalitarianism, mass surveillance and repressive regimentation of people and behaviors within society.",
    categories: ["Fiction", "Dystopian", "Classic"],
    pages: 328,
    isbn: "978-0451524935",
    downloadAvailable: true
  },
  {
    id: "book-3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    imageUrl: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "book",
    publishedYear: 1813,
    publisher: "T. Egerton, Whitehall",
    language: "English",
    description: "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
    categories: ["Fiction", "Romance", "Classic"],
    pages: 432,
    isbn: "978-0141439518",
    downloadAvailable: true
  },
  {
    id: "book-4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    imageUrl: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "book",
    publishedYear: 1925,
    publisher: "Charles Scribner's Sons",
    language: "English",
    description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    categories: ["Fiction", "Classic", "Literary"],
    pages: 218,
    isbn: "978-0743273565",
    downloadAvailable: true
  },
  {
    id: "book-5",
    title: "Moby-Dick",
    author: "Herman Melville",
    imageUrl: "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "book",
    publishedYear: 1851,
    publisher: "Harper & Brothers",
    language: "English",
    description: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
    categories: ["Fiction", "Adventure", "Classic"],
    pages: 635,
    isbn: "978-0142437247",
    downloadAvailable: true
  },
  {
    id: "book-6",
    title: "War and Peace",
    author: "Leo Tolstoy",
    imageUrl: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "book",
    publishedYear: 1869,
    publisher: "The Russian Messenger",
    language: "Russian",
    description: "War and Peace is a novel by the Russian author Leo Tolstoy, first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains an internationally praised classic of world literature.",
    categories: ["Fiction", "Historical", "Classic"],
    pages: 1225,
    isbn: "978-0199232765",
    downloadAvailable: true
  },
  {
    id: "book-7",
    title: "The Theory of Everything",
    author: "Stephen Hawking",
    imageUrl: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
    type: "book",
    publishedYear: 2002,
    publisher: "Cambridge University Press",
    language: "English",
    description: "In this series of lectures, Stephen Hawking attempts to give a comprehensive account of what we know about the universe.",
    categories: ["Science", "Physics", "Cosmology"],
    pages: 176,
    isbn: "978-0521741965",
    downloadAvailable: true
  },
  {
    id: "book-8",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    imageUrl: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "book",
    publishedYear: 1988,
    publisher: "Bantam Dell",
    language: "English",
    description: "A landmark volume in science writing by one of the great minds of our time.",
    categories: ["Science", "Physics", "Cosmology"],
    pages: 256,
    isbn: "978-0553380163",
    downloadAvailable: true
  }
];

export const journals: Resource[] = [
  {
    id: "journal-1",
    title: "Nature: International Journal of Science",
    author: "Nature Publishing Group",
    imageUrl: "https://images.pexels.com/photos/11368856/pexels-photo-11368856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "journal",
    publishedYear: 2023,
    publisher: "Springer Nature",
    language: "English",
    description: "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.",
    categories: ["Science", "Research", "Multidisciplinary"],
    downloadAvailable: true
  },
  {
    id: "journal-2",
    title: "The Lancet",
    author: "The Lancet",
    imageUrl: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "journal",
    publishedYear: 2023,
    publisher: "Elsevier",
    language: "English",
    description: "The Lancet is a weekly peer-reviewed general medical journal. It is among the world's oldest and best-known general medical journals. The journal publishes original research articles, review articles, editorials, book reviews, and correspondence.",
    categories: ["Medicine", "Health", "Research"],
    downloadAvailable: true
  },
  {
    id: "journal-3",
    title: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    author: "IEEE",
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "journal",
    publishedYear: 2022,
    publisher: "IEEE",
    language: "English",
    description: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) is a monthly peer-reviewed scientific journal published by the IEEE Computer Society. It covers research in computer vision and image understanding, pattern analysis and recognition, and machine intelligence.",
    categories: ["Computer Science", "AI", "Machine Learning"],
    downloadAvailable: true
  },
  {
    id: "journal-4",
    title: "Journal of Personality and Social Psychology",
    author: "American Psychological Association",
    imageUrl: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "journal",
    publishedYear: 2023,
    publisher: "American Psychological Association",
    language: "English",
    description: "The Journal of Personality and Social Psychology is a monthly peer-reviewed scientific journal published by the American Psychological Association that was established in 1965. It covers the fields of social and personality psychology.",
    categories: ["Psychology", "Social Science", "Research"],
    downloadAvailable: true
  },
  {
    id: "journal-5",
    title: "Cell",
    author: "Cell Press",
    imageUrl: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
    type: "journal",
    publishedYear: 2023,
    publisher: "Cell Press",
    language: "English",
    description: "Cell publishes findings of unusual significance in any area of experimental biology.",
    categories: ["Biology", "Medicine", "Research"],
    downloadAvailable: true
  },
  {
    id: "journal-6",
    title: "Physical Review Letters",
    author: "American Physical Society",
    imageUrl: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
    type: "journal",
    publishedYear: 2023,
    publisher: "APS Physics",
    language: "English",
    description: "Physical Review Letters publishes short, high-quality reports of significant fundamental research in all fields of physics.",
    categories: ["Physics", "Research", "Science"],
    downloadAvailable: true
  }
];

export const newspapers: Resource[] = [
  {
    id: "newspaper-1",
    title: "The Times of India (1861 Archive)",
    author: "Bennett, Coleman & Co. Ltd.",
    imageUrl: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "newspaper",
    publishedYear: 1861,
    publisher: "Bennett, Coleman & Co. Ltd.",
    language: "English",
    description: "The Times of India is an Indian English-language daily newspaper and digital news media owned and managed by The Times Group. It is the third-largest newspaper in India by circulation and largest selling English-language daily in the world.",
    categories: ["News", "Historical", "Indian"],
    downloadAvailable: true
  },
  {
    id: "newspaper-2",
    title: "The Hindu (1925 Archive)",
    author: "The Hindu Group",
    imageUrl: "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "newspaper",
    publishedYear: 1925,
    publisher: "The Hindu Group",
    language: "English",
    description: "The Hindu is an Indian English-language daily newspaper owned by The Hindu Group, headquartered in Chennai, Tamil Nadu. It began as a weekly in 1878 and became a daily in 1889. It is one of the Indian newspapers of record and the second most circulated English-language newspaper in India.",
    categories: ["News", "Historical", "Indian"],
    downloadAvailable: true
  },
  {
    id: "newspaper-3",
    title: "Anandabazar Patrika (1950 Archive)",
    author: "ABP Group",
    imageUrl: "https://images.pexels.com/photos/5083231/pexels-photo-5083231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "newspaper",
    publishedYear: 1950,
    publisher: "ABP Group",
    language: "Bengali",
    description: "Anandabazar Patrika is an Indian Bengali-language daily newspaper published in Kolkata, New Delhi, Mumbai and other locations by ABP Group. According to the Audit Bureau of Circulations, it has the largest circulation for a single-edition, regional language newspaper in India.",
    categories: ["News", "Historical", "Bengali"],
    downloadAvailable: true
  },
  {
    id: "newspaper-4",
    title: "Dainik Jagran (1975 Archive)",
    author: "Jagran Prakashan Limited",
    imageUrl: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "newspaper",
    publishedYear: 1975,
    publisher: "Jagran Prakashan Limited",
    language: "Hindi",
    description: "Dainik Jagran is an Indian Hindi-language daily newspaper. As of 2020, it is the largest newspaper in India by circulation as per Audit Bureau of Circulations. It has 37 editions across 11 states in India.",
    categories: ["News", "Historical", "Hindi"],
    downloadAvailable: true
  }
];

export const gigResources: Resource[] = [
  {
    id: "gig-1",
    title: "Global Climate Change Dataset",
    author: "NASA Earth Science",
    imageUrl: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
    type: "gig",
    publishedYear: 2023,
    publisher: "NASA",
    language: "English",
    description: "Comprehensive dataset of global climate changes over the past century, including temperature variations, sea level changes, and atmospheric composition.",
    categories: ["Climate Science", "Environmental Studies", "Data Science"],
    downloadAvailable: true,
    gigDetails: {
      institution: "NASA",
      accessLevel: "open",
      format: ["CSV", "JSON", "NetCDF"],
      citations: 1243,
      lastUpdated: "2023-12-15"
    }
  },
  {
    id: "gig-2",
    title: "Human Genome Project Data",
    author: "National Human Genome Research Institute",
    imageUrl: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
    type: "gig",
    publishedYear: 2023,
    publisher: "NIH",
    language: "English",
    description: "Complete human genome sequencing data, including genetic variations and annotations.",
    categories: ["Genetics", "Biology", "Medical Research"],
    downloadAvailable: true,
    gigDetails: {
      institution: "NIH",
      accessLevel: "institutional",
      format: ["FASTQ", "BAM", "VCF"],
      citations: 2891,
      lastUpdated: "2023-11-30"
    }
  }
];

export const allResources: Resource[] = [...books, ...journals, ...newspapers, ...gigResources];

export const getFeaturedResources = (): Resource[] => {
  return allResources.slice(0, 8);
};

export const getResourceById = (id: string): Resource | undefined => {
  return allResources.find(resource => resource.id === id);
};

export const getResourcesByType = (type: 'book' | 'journal' | 'newspaper' | 'gig'): Resource[] => {
  return allResources.filter(resource => resource.type === type);
};

export const getRelatedResources = (resource: Resource, count: number = 4): Resource[] => {
  const sameType = allResources.filter(r => 
    r.id !== resource.id && 
    (r.type === resource.type || (resource.categories && r.categories && 
      r.categories.some((cat: any) => resource.categories?.includes(cat))))
  );
  
  return sameType.slice(0, count);
};

export const filterResources = (filters: {
  type?: string;
  language?: string;
  year?: string;
  category?: string;
  publisher?: string;
  accessLevel?: string;
  searchTerm?: string;
}): Resource[] => {
  return allResources.filter(resource => {
    const matchesType = !filters.type || resource.type === filters.type;
    const matchesLanguage = !filters.language || resource.language === filters.language;
    const matchesYear = !filters.year || resource.publishedYear.toString() === filters.year;
    const matchesCategory = !filters.category || resource.categories?.includes(filters.category);
    const matchesPublisher = !filters.publisher || resource.publisher?.includes(filters.publisher);
    const matchesAccessLevel = !filters.accessLevel || 
      (resource.type === 'gig' && resource.gigDetails?.accessLevel === filters.accessLevel);
    const matchesSearch = !filters.searchTerm || 
      resource.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      resource.description?.toLowerCase().includes(filters.searchTerm.toLowerCase());

    return matchesType && matchesLanguage && matchesYear && matchesCategory && 
           matchesPublisher && matchesAccessLevel && matchesSearch;
  });
};
