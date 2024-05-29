const getHtmlSectionText = (section) => {
  let sectionText = "";

  for (let file of section.files) {
    sectionText += `<h3><a href="${file.name}">${file.name}</a></h3>\n`;

    sectionText += `<p>${file.description} <a href="${file.source}">Original</a></p>\n`;
  }

  return sectionText;
};

const getHtmlContentText = (content) => {
  let contentText =
    "<!DOCTYPE html>\n" +
    "<html lang='en-US'>\n" +
    "<head>\n" +
    "<meta charset='UTF-8'>\n" +
    "<meta http-equiv='X-UA-Compatible' content='IE=edge'>\n" +
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n";
  contentText += `<title>${content.title}</title>\n`;
  contentText += '<link rel="stylesheet" href="style.css">\n' + "</head>\n";
  contentText += "<body>\n" + '<div class="container flow">\n';
  contentText += `<h1 class="title">${content.title}</h1>\n<hr>\n`;
  for (let section of content.sections) {
    contentText += `<h2>${section.title}</h2>\n`;
    contentText += getHtmlSectionText(section);
  }
  contentText += "</div>\n" + "</body>\n" + "</html>";

  return contentText;
};

const generateHtml = (content) => {
  return getHtmlContentText(content);
};

module.exports = generateHtml;
