#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QSqlDatabase>
#include <QSqlQuery>
#include <QDebug>
#include <QSqlError>
#include <QMessageBox>
#include <stdio.h>
#include <qgroupbox.h>

using namespace std;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    db = QSqlDatabase::addDatabase("QSQLITE");
    db.setDatabaseName("PatientsRecords.db");
    db.open();
    createTable();
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::readTable()
{
    ui->recordstextBrowser->clear();
    QSqlQuery query;
    query.exec("SELECT * FROM patientRecords");
    while(query.next())
    {
          QString name = query.value(0).toString();
          QString sex = query.value(1).toString();
          QDate dateToConvert = query.value(2).toDate();
          QString bday = dateToConvert.toString("yyyy-MM-dd");
          QString email = query.value(3).toString();
          QString phone = query.value(4).toString();
          QString ohip = query.value(5).toString();
          ui->recordstextBrowser->append(QString("Patient Name: %1 | Gender: %2 | BirthDay: %3 | Email: %4 | Phone-Number:(%5) | OHIP Card: %6").arg(name).arg(sex).arg(bday).arg(email).arg(phone).arg(ohip));
    }
}

void MainWindow::createTable()
{
    QSqlQuery query;
    QSqlQuery queryB;
    query.exec("CREATE TABLE IF NOT EXISTS patientRecords( patientName TEXT  PRIMARY KEY, patientGender TEXT, patientBirthDate DATE, patientEmail TEXT, patientPhone TEXT,patientOHIP VARCHAR(12))" );
    queryB.exec("CREATE TABLE IF NOT EXISTS appointmentRecords( pName TEXT, appointmentDate DATE, appointmentTime TIME, pEmail TEXT, summary TEXT, pPhone TEXT, OHIP VARCHAR(12),PRIMARY KEY(appointmentDate, appointmentTime))" );
}

void MainWindow::on_newPatientButton_clicked()
{
    QString name = ui->patientName->text();
    QString email = ui->email->text();
    QString phone = ui->phone->text();
    QString ohip = ui->ohip->text();
    QString sex = ui->gender->currentText();
    QDate birthDay =ui->birthDay->date();
    QSqlQuery query;
    query.prepare("INSERT INTO patientRecords(patientName, patientGender, patientBirthDate, patientEmail, patientPhone, patientOHIP) VALUES(?,?,?,?,?,?)");
    query.addBindValue(name);
    query.addBindValue(sex);
    query.addBindValue(birthDay);
    query.addBindValue(email);
    query.addBindValue(phone);
    query.addBindValue(ohip);
    query.exec();
    readTable();
}


void MainWindow::on_updateButton_clicked()
{
    QString newName = ui->newName->text();
    QString newEmail = ui->newEmail->text();
    QString newPhone = ui->newPhone->text();
    QString newGender = ui->newGenderComboBox->currentText();
    QString nameToSearch= ui->patientToUpdate->text();
    QString patient;
    QSqlQuery query;
    query.prepare("SELECT * FROM patientRecords WHERE patientName = ?");
    query.addBindValue(nameToSearch);
    query.exec();

    while(query.next()){
        patient = query.value(0).toString();
    }

    if(patient.length() > 0)
    {
        if(newName.length()>0){
            QSqlQuery query;
            query.prepare("UPDATE patientRecords SET patientName = ? WHERE patientName = ?");
            query.addBindValue(newName);
            query.addBindValue(patient);
            query.exec();
        }
        if(newEmail.length()>0){
            QSqlQuery query;
            query.prepare("UPDATE patientRecords SET patientEmail = ? WHERE patientName = ?");
            query.addBindValue(newEmail);
            query.addBindValue(patient);
             query.exec();
        }
        if(newPhone.length()>0){
            QSqlQuery query;
            query.prepare("UPDATE patientRecords SET patientPhone = ? WHERE patientName = ?");
            query.addBindValue(newPhone);
            query.addBindValue(patient);
             query.exec();
        }
        if(newGender.length()>0){
            QSqlQuery query;
            query.prepare("UPDATE patientRecords SET patientGender = ? WHERE patientName = ?");
            query.addBindValue(newGender);
            query.addBindValue(patient);
             query.exec();
        }
        QSqlQuery query;
        query.prepare("SELECT * FROM patientRecords WHERE patientName = ?");
        query.addBindValue(patient);
        query.exec();
        ui->updateDisplay->clear();
        while(query.next())
        {
              QString name = query.value(0).toString();
              QString sex = query.value(1).toString();
              QDate dateToConvert = query.value(2).toDate();
              QString bday = dateToConvert.toString("yyyy-MM-dd");
              QString email = query.value(3).toString();
              QString phone = query.value(4).toString();
              QString ohip = query.value(5).toString();
              ui->updateDisplay->append(QString("Patient Name: %1 | Gender: %2 | BirthDay: %3 | Email: %4 | Phone-Number:(%5) | OHIP Card: %6").arg(name).arg(sex).arg(bday).arg(email).arg(phone).arg(ohip));
        }

    }else{
        QMessageBox::critical(this,"Error","No Patient Found.");
    }

}

void MainWindow::on_searchPatientButton_clicked()
{
    QString patient = ui->searchPatient->text();
    QString name;
    QSqlQuery query;
    query.prepare("SELECT * FROM patientRecords WHERE patientName = ?");
    query.addBindValue(patient);
    query.exec();
    while(query.next())
    {
       name = query.value(0).toString();
    }

    if(name.length()>0)
    {
        ui->searchedPatientLabel->setText(name);
    }else{
        QMessageBox::critical(this,"Error","No Patient Found.");
    }
}



void MainWindow::on_makeAppointmentButton_clicked()
{
    QString patient = ui->searchedPatientLabel->text();

        QSqlQuery query;
        query.prepare("SELECT * FROM patientRecords WHERE patientName = ?");
        query.addBindValue(patient);
        query.exec();
        while(query.next())
        {
              QString name = query.value(0).toString();
              QString email = query.value(3).toString();
              QString phone = query.value(4).toString();
              QString ohip = query.value(5).toString();
              QDate date = ui->appointDate->date();
              QTime time = ui->appointTime->time();
              QString reason = ui->reasonForAppointment->toPlainText();
              QSqlQuery newAppointmentQuery;
              newAppointmentQuery.prepare("INSERT INTO appointmentRecords( pName, appointmentDate , appointmentTime, pEmail, summary, pPhone, OHIP) VALUES(?,?,?,?,?,?,?)");
              newAppointmentQuery.addBindValue(name);
              newAppointmentQuery.addBindValue(date);
              newAppointmentQuery.addBindValue(time);
              newAppointmentQuery.addBindValue(email);
              newAppointmentQuery.addBindValue(reason);
              newAppointmentQuery.addBindValue(phone);
              newAppointmentQuery.addBindValue(ohip);
              newAppointmentQuery.exec();

              QSqlQuery showAppointmentsQuery;
              showAppointmentsQuery.prepare("SELECT * FROM appointmentRecords WHERE pName = ?");
              showAppointmentsQuery.addBindValue(patient);
              showAppointmentsQuery.exec();
               ui->appointmentsDisplay->clear();
              while(showAppointmentsQuery.next())
              {

                    QString name = showAppointmentsQuery.value(0).toString();
                    QDate date = showAppointmentsQuery.value(1).toDate();
                    QString appDate = date.toString();
                    QTime time = showAppointmentsQuery.value(2).toTime();
                    QString appTime = time.toString();
                    QString email = showAppointmentsQuery.value(3).toString();
                    QString reason = showAppointmentsQuery.value(4).toString();
                    QString phone = showAppointmentsQuery.value(5).toString();
                    QString ohip = showAppointmentsQuery.value(6).toString();

                    ui->appointmentsDisplay->append(QString("Patient: %1 Appointment Date/Time: %2 - %3 Phone: %4 Email: %5 OHIP: %6 Notes: %7").arg(name).arg(appDate).arg(appTime).arg(phone).arg(email).arg(ohip).arg(reason));
              }
        }
      ui->searchedPatientLabel->clear();
}


void MainWindow::on_checkAppointmentsButton_clicked()
{
    QSqlQuery showAppointmentsQuery;
    QDate dateToQuery = ui->appointDate->date();
    showAppointmentsQuery.prepare("SELECT * FROM appointmentRecords WHERE appointmentDate = ?");
    showAppointmentsQuery.addBindValue(dateToQuery);
    showAppointmentsQuery.exec();
     ui->appointmentsDisplay->clear();
    while(showAppointmentsQuery.next())
    {

          QString name = showAppointmentsQuery.value(0).toString();
          QDate date = showAppointmentsQuery.value(1).toDate();
          QString appDate = date.toString();
          QTime time = showAppointmentsQuery.value(2).toTime();
          QString appTime = time.toString();
          QString email = showAppointmentsQuery.value(3).toString();
          QString reason = showAppointmentsQuery.value(4).toString();
          QString phone = showAppointmentsQuery.value(5).toString();
          QString ohip = showAppointmentsQuery.value(6).toString();

          ui->appointmentsDisplay->append(QString("Patient: %1 Appointment Date/Time: %2 - %3 Phone: %4 Email: %5 OHIP: %6 Notes: %7").arg(name).arg(appDate).arg(appTime).arg(phone).arg(email).arg(ohip).arg(reason));
    }
}

void MainWindow::on_searchAllPatients_clicked()
{
    readTable();
}

void MainWindow::on_searchByPatientName_clicked()
{
    ui->recordstextBrowser->clear();
    QString nameToSearch = ui->searchByName->text();
    QSqlQuery query;
    query.prepare("SELECT * FROM patientRecords WHERE UPPER(patientName) LIKE UPPER(?)");
    query.addBindValue("%" + nameToSearch + "%");
    query.exec();
    while(query.next())
    {
          QString name = query.value(0).toString();
          QString sex = query.value(1).toString();
          QDate dateToConvert = query.value(2).toDate();
          QString bday = dateToConvert.toString("yyyy-MM-dd");
          QString email = query.value(3).toString();
          QString phone = query.value(4).toString();
          QString ohip = query.value(5).toString();
          ui->recordstextBrowser->append(QString("Patient Name: %1 | Gender: %2 | BirthDay: %3 | Email: %4 | Phone-Number:(%5) | OHIP Card: %6").arg(name).arg(sex).arg(bday).arg(email).arg(phone).arg(ohip));
    }
}
