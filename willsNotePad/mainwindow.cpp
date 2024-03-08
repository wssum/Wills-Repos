#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QFile>
#include <QFileDialog>
#include <QTextStream>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_actionSave_triggered()
{
    QString filePath = QFileDialog::getSaveFileName(this,"File to Open");
    QFile file(filePath);
    file.open(QFile::WriteOnly | QFile::Text);
    QTextStream textToSave(&file);
    QString text = ui->mainEditScreen->toPlainText();
    textToSave << text;
    file.flush();
    file.close();
}

void MainWindow::on_actionOpen_triggered()
{
    QString filePath = QFileDialog::getOpenFileName(this,"File to Open");
    QFile file(filePath);
    file.open(QFile::ReadOnly | QFile::Text);
    QTextStream textToRead(&file);
    QString text = textToRead.readAll();
    ui->mainEditScreen->setText(text);
    file.close();
}
