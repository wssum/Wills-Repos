/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.11.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QDateEdit>
#include <QtWidgets/QGroupBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPlainTextEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QTabWidget>
#include <QtWidgets/QTextBrowser>
#include <QtWidgets/QTimeEdit>
#include <QtWidgets/QToolBar>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralWidget;
    QTabWidget *tabWidget;
    QWidget *tab;
    QWidget *layoutWidget;
    QVBoxLayout *_2;
    QVBoxLayout *verticalLayout_3;
    QVBoxLayout *verticalLayout_2;
    QVBoxLayout *verticalLayout;
    QHBoxLayout *horizontalLayout;
    QLabel *patientNameLabel;
    QLineEdit *patientName;
    QHBoxLayout *horizontalLayout_2;
    QLabel *emailNameLabel;
    QLineEdit *email;
    QHBoxLayout *horizontalLayout_4;
    QLabel *phoneNumberLabel;
    QLineEdit *phone;
    QHBoxLayout *horizontalLayout_5;
    QLabel *OHIPLabel;
    QLineEdit *ohip;
    QHBoxLayout *horizontalLayout_3;
    QLabel *bdayLabel;
    QDateEdit *birthDay;
    QHBoxLayout *horizontalLayout_6;
    QLabel *sexLabel;
    QComboBox *gender;
    QPushButton *newPatientButton;
    QTextBrowser *recordstextBrowser;
    QWidget *tab_2;
    QWidget *layoutWidget1;
    QVBoxLayout *verticalLayout_4;
    QHBoxLayout *horizontalLayout_10;
    QLabel *label_4;
    QLineEdit *newName;
    QHBoxLayout *horizontalLayout_13;
    QHBoxLayout *horizontalLayout_7;
    QLabel *label_2;
    QLineEdit *newEmail;
    QHBoxLayout *horizontalLayout_14;
    QLabel *label_3;
    QLineEdit *newPhone;
    QHBoxLayout *horizontalLayout_12;
    QLabel *label_6;
    QComboBox *newGenderComboBox;
    QWidget *layoutWidget2;
    QHBoxLayout *horizontalLayout_8;
    QLabel *label_5;
    QHBoxLayout *horizontalLayout_11;
    QLineEdit *patientToUpdate;
    QTextBrowser *updateDisplay;
    QPushButton *updateButton;
    QWidget *tab_3;
    QWidget *layoutWidget3;
    QVBoxLayout *verticalLayout_7;
    QLabel *searchedPatientLabel;
    QVBoxLayout *verticalLayout_5;
    QHBoxLayout *horizontalLayout_16;
    QLabel *label_9;
    QGroupBox *groupBox;
    QWidget *layoutWidget4;
    QVBoxLayout *verticalLayout_8;
    QDateEdit *appointDate;
    QPushButton *checkAppointmentsButton;
    QHBoxLayout *horizontalLayout_17;
    QLabel *label_8;
    QTimeEdit *appointTime;
    QHBoxLayout *horizontalLayout_18;
    QLabel *label_10;
    QPlainTextEdit *reasonForAppointment;
    QVBoxLayout *verticalLayout_6;
    QWidget *layoutWidget5;
    QHBoxLayout *horizontalLayout_15;
    QHBoxLayout *horizontalLayout_9;
    QLabel *label_7;
    QLineEdit *searchPatient;
    QPushButton *searchPatientButton;
    QPushButton *makeAppointmentButton;
    QTextBrowser *appointmentsDisplay;
    QMenuBar *menuBar;
    QToolBar *mainToolBar;
    QStatusBar *statusBar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QStringLiteral("MainWindow"));
        MainWindow->resize(1426, 881);
        centralWidget = new QWidget(MainWindow);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        tabWidget = new QTabWidget(centralWidget);
        tabWidget->setObjectName(QStringLiteral("tabWidget"));
        tabWidget->setGeometry(QRect(0, 0, 1461, 831));
        tab = new QWidget();
        tab->setObjectName(QStringLiteral("tab"));
        layoutWidget = new QWidget(tab);
        layoutWidget->setObjectName(QStringLiteral("layoutWidget"));
        layoutWidget->setGeometry(QRect(10, 10, 261, 222));
        _2 = new QVBoxLayout(layoutWidget);
        _2->setSpacing(6);
        _2->setContentsMargins(11, 11, 11, 11);
        _2->setObjectName(QStringLiteral("_2"));
        _2->setContentsMargins(0, 0, 0, 0);
        verticalLayout_3 = new QVBoxLayout();
        verticalLayout_3->setSpacing(6);
        verticalLayout_3->setObjectName(QStringLiteral("verticalLayout_3"));
        verticalLayout_2 = new QVBoxLayout();
        verticalLayout_2->setSpacing(6);
        verticalLayout_2->setObjectName(QStringLiteral("verticalLayout_2"));
        verticalLayout = new QVBoxLayout();
        verticalLayout->setSpacing(6);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setSpacing(6);
        horizontalLayout->setObjectName(QStringLiteral("horizontalLayout"));
        patientNameLabel = new QLabel(layoutWidget);
        patientNameLabel->setObjectName(QStringLiteral("patientNameLabel"));

        horizontalLayout->addWidget(patientNameLabel);

        patientName = new QLineEdit(layoutWidget);
        patientName->setObjectName(QStringLiteral("patientName"));

        horizontalLayout->addWidget(patientName);


        verticalLayout->addLayout(horizontalLayout);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setSpacing(6);
        horizontalLayout_2->setObjectName(QStringLiteral("horizontalLayout_2"));
        emailNameLabel = new QLabel(layoutWidget);
        emailNameLabel->setObjectName(QStringLiteral("emailNameLabel"));

        horizontalLayout_2->addWidget(emailNameLabel);

        email = new QLineEdit(layoutWidget);
        email->setObjectName(QStringLiteral("email"));

        horizontalLayout_2->addWidget(email);


        verticalLayout->addLayout(horizontalLayout_2);

        horizontalLayout_4 = new QHBoxLayout();
        horizontalLayout_4->setSpacing(6);
        horizontalLayout_4->setObjectName(QStringLiteral("horizontalLayout_4"));
        phoneNumberLabel = new QLabel(layoutWidget);
        phoneNumberLabel->setObjectName(QStringLiteral("phoneNumberLabel"));

        horizontalLayout_4->addWidget(phoneNumberLabel);

        phone = new QLineEdit(layoutWidget);
        phone->setObjectName(QStringLiteral("phone"));

        horizontalLayout_4->addWidget(phone);


        verticalLayout->addLayout(horizontalLayout_4);

        horizontalLayout_5 = new QHBoxLayout();
        horizontalLayout_5->setSpacing(6);
        horizontalLayout_5->setObjectName(QStringLiteral("horizontalLayout_5"));
        OHIPLabel = new QLabel(layoutWidget);
        OHIPLabel->setObjectName(QStringLiteral("OHIPLabel"));

        horizontalLayout_5->addWidget(OHIPLabel);

        ohip = new QLineEdit(layoutWidget);
        ohip->setObjectName(QStringLiteral("ohip"));

        horizontalLayout_5->addWidget(ohip);


        verticalLayout->addLayout(horizontalLayout_5);


        verticalLayout_2->addLayout(verticalLayout);

        horizontalLayout_3 = new QHBoxLayout();
        horizontalLayout_3->setSpacing(6);
        horizontalLayout_3->setObjectName(QStringLiteral("horizontalLayout_3"));
        bdayLabel = new QLabel(layoutWidget);
        bdayLabel->setObjectName(QStringLiteral("bdayLabel"));

        horizontalLayout_3->addWidget(bdayLabel);

        birthDay = new QDateEdit(layoutWidget);
        birthDay->setObjectName(QStringLiteral("birthDay"));

        horizontalLayout_3->addWidget(birthDay);


        verticalLayout_2->addLayout(horizontalLayout_3);


        verticalLayout_3->addLayout(verticalLayout_2);

        horizontalLayout_6 = new QHBoxLayout();
        horizontalLayout_6->setSpacing(6);
        horizontalLayout_6->setObjectName(QStringLiteral("horizontalLayout_6"));
        sexLabel = new QLabel(layoutWidget);
        sexLabel->setObjectName(QStringLiteral("sexLabel"));

        horizontalLayout_6->addWidget(sexLabel);

        gender = new QComboBox(layoutWidget);
        gender->addItem(QString());
        gender->addItem(QString());
        gender->addItem(QString());
        gender->addItem(QString());
        gender->addItem(QString());
        gender->addItem(QString());
        gender->setObjectName(QStringLiteral("gender"));

        horizontalLayout_6->addWidget(gender);


        verticalLayout_3->addLayout(horizontalLayout_6);


        _2->addLayout(verticalLayout_3);

        newPatientButton = new QPushButton(layoutWidget);
        newPatientButton->setObjectName(QStringLiteral("newPatientButton"));

        _2->addWidget(newPatientButton);

        recordstextBrowser = new QTextBrowser(tab);
        recordstextBrowser->setObjectName(QStringLiteral("recordstextBrowser"));
        recordstextBrowser->setGeometry(QRect(290, 10, 1121, 781));
        tabWidget->addTab(tab, QString());
        tab_2 = new QWidget();
        tab_2->setObjectName(QStringLiteral("tab_2"));
        layoutWidget1 = new QWidget(tab_2);
        layoutWidget1->setObjectName(QStringLiteral("layoutWidget1"));
        layoutWidget1->setGeometry(QRect(20, 100, 262, 121));
        verticalLayout_4 = new QVBoxLayout(layoutWidget1);
        verticalLayout_4->setSpacing(6);
        verticalLayout_4->setContentsMargins(11, 11, 11, 11);
        verticalLayout_4->setObjectName(QStringLiteral("verticalLayout_4"));
        verticalLayout_4->setContentsMargins(0, 0, 0, 0);
        horizontalLayout_10 = new QHBoxLayout();
        horizontalLayout_10->setSpacing(6);
        horizontalLayout_10->setObjectName(QStringLiteral("horizontalLayout_10"));
        label_4 = new QLabel(layoutWidget1);
        label_4->setObjectName(QStringLiteral("label_4"));

        horizontalLayout_10->addWidget(label_4);

        newName = new QLineEdit(layoutWidget1);
        newName->setObjectName(QStringLiteral("newName"));

        horizontalLayout_10->addWidget(newName);


        verticalLayout_4->addLayout(horizontalLayout_10);

        horizontalLayout_13 = new QHBoxLayout();
        horizontalLayout_13->setSpacing(6);
        horizontalLayout_13->setObjectName(QStringLiteral("horizontalLayout_13"));
        horizontalLayout_7 = new QHBoxLayout();
        horizontalLayout_7->setSpacing(6);
        horizontalLayout_7->setObjectName(QStringLiteral("horizontalLayout_7"));
        label_2 = new QLabel(layoutWidget1);
        label_2->setObjectName(QStringLiteral("label_2"));

        horizontalLayout_7->addWidget(label_2);

        newEmail = new QLineEdit(layoutWidget1);
        newEmail->setObjectName(QStringLiteral("newEmail"));

        horizontalLayout_7->addWidget(newEmail);


        horizontalLayout_13->addLayout(horizontalLayout_7);


        verticalLayout_4->addLayout(horizontalLayout_13);

        horizontalLayout_14 = new QHBoxLayout();
        horizontalLayout_14->setSpacing(6);
        horizontalLayout_14->setObjectName(QStringLiteral("horizontalLayout_14"));
        label_3 = new QLabel(layoutWidget1);
        label_3->setObjectName(QStringLiteral("label_3"));

        horizontalLayout_14->addWidget(label_3);

        newPhone = new QLineEdit(layoutWidget1);
        newPhone->setObjectName(QStringLiteral("newPhone"));

        horizontalLayout_14->addWidget(newPhone);


        verticalLayout_4->addLayout(horizontalLayout_14);

        horizontalLayout_12 = new QHBoxLayout();
        horizontalLayout_12->setSpacing(6);
        horizontalLayout_12->setObjectName(QStringLiteral("horizontalLayout_12"));
        label_6 = new QLabel(layoutWidget1);
        label_6->setObjectName(QStringLiteral("label_6"));

        horizontalLayout_12->addWidget(label_6);

        newGenderComboBox = new QComboBox(layoutWidget1);
        newGenderComboBox->addItem(QString());
        newGenderComboBox->addItem(QString());
        newGenderComboBox->addItem(QString());
        newGenderComboBox->addItem(QString());
        newGenderComboBox->addItem(QString());
        newGenderComboBox->addItem(QString());
        newGenderComboBox->setObjectName(QStringLiteral("newGenderComboBox"));

        horizontalLayout_12->addWidget(newGenderComboBox);


        verticalLayout_4->addLayout(horizontalLayout_12);

        layoutWidget2 = new QWidget(tab_2);
        layoutWidget2->setObjectName(QStringLiteral("layoutWidget2"));
        layoutWidget2->setGeometry(QRect(20, 50, 262, 24));
        horizontalLayout_8 = new QHBoxLayout(layoutWidget2);
        horizontalLayout_8->setSpacing(6);
        horizontalLayout_8->setContentsMargins(11, 11, 11, 11);
        horizontalLayout_8->setObjectName(QStringLiteral("horizontalLayout_8"));
        horizontalLayout_8->setContentsMargins(0, 0, 0, 0);
        label_5 = new QLabel(layoutWidget2);
        label_5->setObjectName(QStringLiteral("label_5"));

        horizontalLayout_8->addWidget(label_5);

        horizontalLayout_11 = new QHBoxLayout();
        horizontalLayout_11->setSpacing(6);
        horizontalLayout_11->setObjectName(QStringLiteral("horizontalLayout_11"));

        horizontalLayout_8->addLayout(horizontalLayout_11);

        patientToUpdate = new QLineEdit(layoutWidget2);
        patientToUpdate->setObjectName(QStringLiteral("patientToUpdate"));

        horizontalLayout_8->addWidget(patientToUpdate);

        updateDisplay = new QTextBrowser(tab_2);
        updateDisplay->setObjectName(QStringLiteral("updateDisplay"));
        updateDisplay->setGeometry(QRect(310, 20, 1101, 771));
        updateButton = new QPushButton(tab_2);
        updateButton->setObjectName(QStringLiteral("updateButton"));
        updateButton->setGeometry(QRect(100, 230, 93, 28));
        tabWidget->addTab(tab_2, QString());
        tab_3 = new QWidget();
        tab_3->setObjectName(QStringLiteral("tab_3"));
        layoutWidget3 = new QWidget(tab_3);
        layoutWidget3->setObjectName(QStringLiteral("layoutWidget3"));
        layoutWidget3->setGeometry(QRect(30, 60, 311, 318));
        verticalLayout_7 = new QVBoxLayout(layoutWidget3);
        verticalLayout_7->setSpacing(6);
        verticalLayout_7->setContentsMargins(11, 11, 11, 11);
        verticalLayout_7->setObjectName(QStringLiteral("verticalLayout_7"));
        verticalLayout_7->setContentsMargins(0, 0, 0, 0);
        searchedPatientLabel = new QLabel(layoutWidget3);
        searchedPatientLabel->setObjectName(QStringLiteral("searchedPatientLabel"));

        verticalLayout_7->addWidget(searchedPatientLabel);

        verticalLayout_5 = new QVBoxLayout();
        verticalLayout_5->setSpacing(6);
        verticalLayout_5->setObjectName(QStringLiteral("verticalLayout_5"));
        horizontalLayout_16 = new QHBoxLayout();
        horizontalLayout_16->setSpacing(6);
        horizontalLayout_16->setObjectName(QStringLiteral("horizontalLayout_16"));
        label_9 = new QLabel(layoutWidget3);
        label_9->setObjectName(QStringLiteral("label_9"));

        horizontalLayout_16->addWidget(label_9);

        groupBox = new QGroupBox(layoutWidget3);
        groupBox->setObjectName(QStringLiteral("groupBox"));
        layoutWidget4 = new QWidget(groupBox);
        layoutWidget4->setObjectName(QStringLiteral("layoutWidget4"));
        layoutWidget4->setGeometry(QRect(-140, -30, 313, 320));
        verticalLayout_8 = new QVBoxLayout(layoutWidget4);
        verticalLayout_8->setSpacing(6);
        verticalLayout_8->setContentsMargins(11, 11, 11, 11);
        verticalLayout_8->setObjectName(QStringLiteral("verticalLayout_8"));
        verticalLayout_8->setContentsMargins(0, 0, 0, 0);

        horizontalLayout_16->addWidget(groupBox);

        appointDate = new QDateEdit(layoutWidget3);
        appointDate->setObjectName(QStringLiteral("appointDate"));

        horizontalLayout_16->addWidget(appointDate);


        verticalLayout_5->addLayout(horizontalLayout_16);


        verticalLayout_7->addLayout(verticalLayout_5);

        checkAppointmentsButton = new QPushButton(layoutWidget3);
        checkAppointmentsButton->setObjectName(QStringLiteral("checkAppointmentsButton"));

        verticalLayout_7->addWidget(checkAppointmentsButton);

        horizontalLayout_17 = new QHBoxLayout();
        horizontalLayout_17->setSpacing(6);
        horizontalLayout_17->setObjectName(QStringLiteral("horizontalLayout_17"));
        label_8 = new QLabel(layoutWidget3);
        label_8->setObjectName(QStringLiteral("label_8"));

        horizontalLayout_17->addWidget(label_8);

        appointTime = new QTimeEdit(layoutWidget3);
        appointTime->setObjectName(QStringLiteral("appointTime"));

        horizontalLayout_17->addWidget(appointTime);


        verticalLayout_7->addLayout(horizontalLayout_17);

        horizontalLayout_18 = new QHBoxLayout();
        horizontalLayout_18->setSpacing(6);
        horizontalLayout_18->setObjectName(QStringLiteral("horizontalLayout_18"));
        label_10 = new QLabel(layoutWidget3);
        label_10->setObjectName(QStringLiteral("label_10"));

        horizontalLayout_18->addWidget(label_10);

        reasonForAppointment = new QPlainTextEdit(layoutWidget3);
        reasonForAppointment->setObjectName(QStringLiteral("reasonForAppointment"));

        horizontalLayout_18->addWidget(reasonForAppointment);


        verticalLayout_7->addLayout(horizontalLayout_18);

        verticalLayout_6 = new QVBoxLayout();
        verticalLayout_6->setSpacing(6);
        verticalLayout_6->setObjectName(QStringLiteral("verticalLayout_6"));

        verticalLayout_7->addLayout(verticalLayout_6);

        layoutWidget5 = new QWidget(tab_3);
        layoutWidget5->setObjectName(QStringLiteral("layoutWidget5"));
        layoutWidget5->setGeometry(QRect(20, 20, 344, 30));
        horizontalLayout_15 = new QHBoxLayout(layoutWidget5);
        horizontalLayout_15->setSpacing(6);
        horizontalLayout_15->setContentsMargins(11, 11, 11, 11);
        horizontalLayout_15->setObjectName(QStringLiteral("horizontalLayout_15"));
        horizontalLayout_15->setContentsMargins(0, 0, 0, 0);
        horizontalLayout_9 = new QHBoxLayout();
        horizontalLayout_9->setSpacing(6);
        horizontalLayout_9->setObjectName(QStringLiteral("horizontalLayout_9"));
        label_7 = new QLabel(layoutWidget5);
        label_7->setObjectName(QStringLiteral("label_7"));

        horizontalLayout_9->addWidget(label_7);

        searchPatient = new QLineEdit(layoutWidget5);
        searchPatient->setObjectName(QStringLiteral("searchPatient"));

        horizontalLayout_9->addWidget(searchPatient);


        horizontalLayout_15->addLayout(horizontalLayout_9);

        searchPatientButton = new QPushButton(layoutWidget5);
        searchPatientButton->setObjectName(QStringLiteral("searchPatientButton"));

        horizontalLayout_15->addWidget(searchPatientButton);

        makeAppointmentButton = new QPushButton(tab_3);
        makeAppointmentButton->setObjectName(QStringLiteral("makeAppointmentButton"));
        makeAppointmentButton->setGeometry(QRect(80, 380, 181, 28));
        appointmentsDisplay = new QTextBrowser(tab_3);
        appointmentsDisplay->setObjectName(QStringLiteral("appointmentsDisplay"));
        appointmentsDisplay->setGeometry(QRect(380, 20, 1021, 761));
        tabWidget->addTab(tab_3, QString());
        MainWindow->setCentralWidget(centralWidget);
        menuBar = new QMenuBar(MainWindow);
        menuBar->setObjectName(QStringLiteral("menuBar"));
        menuBar->setGeometry(QRect(0, 0, 1426, 26));
        MainWindow->setMenuBar(menuBar);
        mainToolBar = new QToolBar(MainWindow);
        mainToolBar->setObjectName(QStringLiteral("mainToolBar"));
        MainWindow->addToolBar(Qt::TopToolBarArea, mainToolBar);
        statusBar = new QStatusBar(MainWindow);
        statusBar->setObjectName(QStringLiteral("statusBar"));
        MainWindow->setStatusBar(statusBar);

        retranslateUi(MainWindow);

        tabWidget->setCurrentIndex(0);


        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QApplication::translate("MainWindow", "MainWindow", nullptr));
        patientNameLabel->setText(QApplication::translate("MainWindow", "Patient Name:", nullptr));
        emailNameLabel->setText(QApplication::translate("MainWindow", "Email:", nullptr));
        phoneNumberLabel->setText(QApplication::translate("MainWindow", "Phone-Number:", nullptr));
        OHIPLabel->setText(QApplication::translate("MainWindow", "OHIP: ", nullptr));
        bdayLabel->setText(QApplication::translate("MainWindow", "Birth day", nullptr));
        sexLabel->setText(QApplication::translate("MainWindow", "Gender", nullptr));
        gender->setItemText(0, QApplication::translate("MainWindow", "Male", nullptr));
        gender->setItemText(1, QApplication::translate("MainWindow", "Female", nullptr));
        gender->setItemText(2, QApplication::translate("MainWindow", "Non-Binary", nullptr));
        gender->setItemText(3, QApplication::translate("MainWindow", "Trans-Man", nullptr));
        gender->setItemText(4, QApplication::translate("MainWindow", "Trans-Woman", nullptr));
        gender->setItemText(5, QApplication::translate("MainWindow", "Other", nullptr));

        newPatientButton->setText(QApplication::translate("MainWindow", "New Patient", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(tab), QApplication::translate("MainWindow", "Tab 1", nullptr));
        label_4->setText(QApplication::translate("MainWindow", "New Name", nullptr));
        label_2->setText(QApplication::translate("MainWindow", "New Email:", nullptr));
        label_3->setText(QApplication::translate("MainWindow", "New Phone-Number", nullptr));
        label_6->setText(QApplication::translate("MainWindow", "New Gender", nullptr));
        newGenderComboBox->setItemText(0, QApplication::translate("MainWindow", "Male", nullptr));
        newGenderComboBox->setItemText(1, QApplication::translate("MainWindow", "Female", nullptr));
        newGenderComboBox->setItemText(2, QApplication::translate("MainWindow", "Non-Binary", nullptr));
        newGenderComboBox->setItemText(3, QApplication::translate("MainWindow", "Trans-Man", nullptr));
        newGenderComboBox->setItemText(4, QApplication::translate("MainWindow", "Trans-Woman", nullptr));
        newGenderComboBox->setItemText(5, QApplication::translate("MainWindow", "Other", nullptr));

        label_5->setText(QApplication::translate("MainWindow", "Patient To Update:", nullptr));
        updateButton->setText(QApplication::translate("MainWindow", "Update", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(tab_2), QApplication::translate("MainWindow", "Tab 2", nullptr));
        searchedPatientLabel->setText(QString());
        label_9->setText(QApplication::translate("MainWindow", "Time of Appointment:", nullptr));
        groupBox->setTitle(QApplication::translate("MainWindow", "GroupBox", nullptr));
        checkAppointmentsButton->setText(QApplication::translate("MainWindow", "Check Appointments", nullptr));
        label_8->setText(QApplication::translate("MainWindow", "Time of Appointment", nullptr));
        label_10->setText(QApplication::translate("MainWindow", "Summary:", nullptr));
        label_7->setText(QApplication::translate("MainWindow", "Search Patients", nullptr));
        searchPatientButton->setText(QApplication::translate("MainWindow", "Search", nullptr));
        makeAppointmentButton->setText(QApplication::translate("MainWindow", "Make Appointment", nullptr));
        tabWidget->setTabText(tabWidget->indexOf(tab_3), QApplication::translate("MainWindow", "Page", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
