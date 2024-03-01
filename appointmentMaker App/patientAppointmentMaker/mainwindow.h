#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QSqlDatabase>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private slots:
    void on_newPatientButton_clicked();

    void on_updatePatientForm_clicked();

    void on_newPatientEntry_clicked();

    void on_updateButton_clicked();

    void on_searchPatientButton_clicked();


    void on_makeAppointmentButton_clicked();


    void on_checkAppointmentsButton_clicked();


    void on_appointmentFormButton_clicked();

private:
    Ui::MainWindow *ui;
    QSqlDatabase db;
    void readTable();
    void createTable();
};

#endif // MAINWINDOW_H
