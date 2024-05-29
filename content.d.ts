type Content = {
  title: string;
  sections: Section[];
};

type Section = {
  title: string;
  files: SectionFile[];
};

type SectionFile = {
  name: string;
  description: string;
  source: string;
};
