const getSectionText = (section) => {
  let sectionText = "";

  for (let file of section.files) {
    sectionText += `### <a href='${file.name}'>${file.name}</a>\n\n`;

    sectionText += `${file.description} [Original](${file.source})\n\n`;
  }

  return sectionText;
};

const getContentText = (content) => {
  let contentText = "";

  for (let section of content.sections) {
    contentText += `## ${section.title}\n\n`;

    contentText += getSectionText(section);
  }

  return contentText;
};

const generateReadme = (content) => {
  let fileContent = `# ${content.title}\n\n`;

  fileContent += getContentText(content);

  return fileContent;
};

module.exports = generateReadme;
