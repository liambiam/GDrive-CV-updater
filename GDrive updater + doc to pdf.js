// Deletes old pdf, converts doc to pdf. Runs daily

function docToPDF() {


  // ID of Google Doc
  var files = DriveApp.getFilesByName('old cv to be deleted');
    // delete old CVs in folder
    while (files.hasNext()) {
      files.next().setTrashed(true);
    }

  var cv_doc = 'doc url (looks like: htrhrthtrh1tyj254)';

  // ID of destination folder
  var cv_pdf_folder = 'folder url';


  // get Google Drive folder
  var folder = DriveApp.getFolderById(cv_pdf_folder);

  // get Google Doc file
  var file = DriveApp.getFileById(cv_doc);

  // get file content as PDF blob
  var pdfBlob = file.getAs('application/pdf');

  // create new PDF file in Google Drive folder
  folder.createFile(pdfBlob);

}