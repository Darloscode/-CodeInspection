<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CitasController;
use App\Http\Controllers\PagoController;
use App\Http\Controllers\ReporteController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\ServiciosController;
use App\Http\Controllers\UsuariosController;

use App\Http\Controllers\{
    RoleController,
    UserAccountController,
    PersonController,
    ClientController,
    StaffController,
    ProfessionalController,
    IdentificationController,
    AddressController,
    PhoneController,
    MedicalProfileController,
    ScheduleController,
    WorkerScheduleController,
    DiscountController,
    ServiceController,
    ProfessionalServiceController,
    PaymentDataController,
    PaymentController,
    ReceiptController,
    AppointmentController,
    AppointmentReportController,
    GenderController,
    OccupationController,
    MaritalStatusController,
    EducationController,
    CountryController,
    StateController,
    CityController,
    AgaController,
    UserAccountStatusController,
    PaymentStatusController,
    AppointmentStatusController,
};


Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);


Route::get('citas/{id}', [CitasController::class, 'getCitaById']);
Route::get('citas/paciente/{id}', [CitasController::class, 'getCitasByPaciente']);
Route::get('citas/entreFechas/{fechaInicio}/{fechaFin}', [CitasController::class, 'getCitasEntreFechas']);
Route::get('citas/profesional/{profesionalId}', [CitasController::class, 'getCitasByProfesional']);
Route::get('citas/estado/{estado}', [CitasController::class, 'getCitasByEstado']);
Route::get('historiaClinica/paciente/{pacienteId}', [CitasController::class, 'getHistoriaClinicaByPaciente']);
Route::post('citas', [CitasController::class, 'createCita']);
Route::put('citas/{id}', [CitasController::class, 'updateCita']);

Route::get('pagos/paciente/{id}', [PagoController::class, 'getPagosByPaciente']);
Route::get('pagos/cita/{citaId}', [PagoController::class, 'getPagoByCita']);
Route::get('pagos/estado/{estado}', [PagoController::class, 'getPagosByEstado']);
Route::get('pagos/servicio/{servicioId}', [PagoController::class, 'getPagosByServicio']);
Route::post('pagos', [PagoController::class, 'createPago']);
Route::put('pagos/{id}', [PagoController::class, 'updateEstadoPago']);

Route::get('reportes/{id}', [ReporteController::class, 'getReporteById']);
Route::post('reportes', [ReporteController::class, 'createReporte']);
Route::get('reportes/paciente/{id}', [ReporteController::class, 'getReportesByPaciente']);
Route::get('reportes/entreFechas/{fechaInicio}/{fechaFin}', [ReporteController::class, 'getReportesEntreFechas']);
Route::get('reportes/profesional/{profesionalId}', [ReporteController::class, 'getReportesByProfesional']);

Route::get('roles', [RolController::class, 'getAllRoles']);
Route::get('roles/{id}', [RolController::class, 'getRolById']);
Route::post('roles', [RolController::class, 'createRol']);
Route::put('roles/{id}', [RolController::class, 'updateRol']);

Route::get('servicios', [ServiciosController::class, 'getAllServicios']);
Route::get('servicios/{id}', [ServiciosController::class, 'getServicioById']);
Route::post('servicios', [ServiciosController::class, 'createServicio']);
Route::put('servicios/{id}', [ServiciosController::class, 'updateServicio']);

Route::get('usuarios', [UsuariosController::class, 'getAllUsuarios']);
Route::get('usuarios/{id}', [UsuariosController::class, 'getUsuarioById']);
Route::get('usuarios/rol/{role}', [UsuariosController::class, 'getUsuariosByRol']);
Route::post('usuarios', [UsuariosController::class, 'createUsuario']);
Route::put('usuarios/{id}', [UsuariosController::class, 'updateUsuario']);


// Role
Route::prefix('role')->group(function () {
    Route::get('/', [RoleController::class, 'index']);
    Route::post('/', [RoleController::class, 'store']);
    Route::put('/{id}', [RoleController::class, 'update']);
    Route::delete('/{id}', [RoleController::class, 'destroy']);
});

// UserAccount
Route::prefix('user-account')->group(function () {
    Route::get('/', [UserAccountController::class, 'index']);
    Route::post('/', [UserAccountController::class, 'store']);
    Route::put('/{id}', [UserAccountController::class, 'update']);
    Route::delete('/{id}', [UserAccountController::class, 'destroy']);
});

// Person
Route::prefix('person')->group(function () {
    Route::get('/', [PersonController::class, 'index']);
    Route::post('/', [PersonController::class, 'store']);
    Route::put('/{id}', [PersonController::class, 'update']);
    Route::delete('/{id}', [PersonController::class, 'destroy']);
});

// Client
Route::prefix('client')->group(function () {
    Route::get('/', [ClientController::class, 'index']);
    Route::post('/', [ClientController::class, 'store']);
    Route::put('/{id}', [ClientController::class, 'update']);
    Route::delete('/{id}', [ClientController::class, 'destroy']);
});

// Staff
Route::prefix('staff')->group(function () {
    Route::get('/', [StaffController::class, 'index']);
    Route::post('/', [StaffController::class, 'store']);
    Route::put('/{id}', [StaffController::class, 'update']);
    Route::delete('/{id}', [StaffController::class, 'destroy']);
});

// Professional
Route::prefix('professional')->group(function () {
    Route::get('/', [ProfessionalController::class, 'index']);
    Route::post('/', [ProfessionalController::class, 'store']);
    Route::put('/{id}', [ProfessionalController::class, 'update']);
    Route::delete('/{id}', [ProfessionalController::class, 'destroy']);
});

// Identification
Route::prefix('identification')->group(function () {
    Route::get('/', [IdentificationController::class, 'index']);
    Route::post('/', [IdentificationController::class, 'store']);
    Route::put('/{id}', [IdentificationController::class, 'update']);
    Route::delete('/{id}', [IdentificationController::class, 'destroy']);
});

// Address
Route::prefix('address')->group(function () {
    Route::get('/', [AddressController::class, 'index']);
    Route::post('/', [AddressController::class, 'store']);
    Route::put('/{id}', [AddressController::class, 'update']);
    Route::delete('/{id}', [AddressController::class, 'destroy']);
});

// Phone
Route::prefix('phone')->group(function () {
    Route::get('/', [PhoneController::class, 'index']);
    Route::post('/', [PhoneController::class, 'store']);
    Route::put('/{id}', [PhoneController::class, 'update']);
    Route::delete('/{id}', [PhoneController::class, 'destroy']);
});

// MedicalProfile
Route::prefix('medical-profile')->group(function () {
    Route::get('/', [MedicalProfileController::class, 'index']);
    Route::post('/', [MedicalProfileController::class, 'store']);
    Route::put('/{id}', [MedicalProfileController::class, 'update']);
    Route::delete('/{id}', [MedicalProfileController::class, 'destroy']);
});

// Schedule
Route::prefix('schedule')->group(function () {
    Route::get('/', [ScheduleController::class, 'index']);
    Route::post('/', [ScheduleController::class, 'store']);
    Route::put('/{id}', [ScheduleController::class, 'update']);
    Route::delete('/{id}', [ScheduleController::class, 'destroy']);
});

// WorkerSchedule
Route::prefix('worker-schedule')->group(function () {
    Route::get('/', [WorkerScheduleController::class, 'index']);
    Route::post('/', [WorkerScheduleController::class, 'store']);
    Route::put('/{id}', [WorkerScheduleController::class, 'update']);
    Route::delete('/{id}', [WorkerScheduleController::class, 'destroy']);
});

// Discount
Route::prefix('discount')->group(function () {
    Route::get('/', [DiscountController::class, 'index']);
    Route::post('/', [DiscountController::class, 'store']);
    Route::put('/{id}', [DiscountController::class, 'update']);
    Route::delete('/{id}', [DiscountController::class, 'destroy']);
});

// Service
Route::prefix('service')->group(function () {
    Route::get('/', [ServiceController::class, 'index']);
    Route::post('/', [ServiceController::class, 'store']);
    Route::put('/{id}', [ServiceController::class, 'update']);
    Route::delete('/{id}', [ServiceController::class, 'destroy']);
});

// ProfessionalService
Route::prefix('professional-service')->group(function () {
    Route::get('/', [ProfessionalServiceController::class, 'index']);
    Route::post('/', [ProfessionalServiceController::class, 'store']);
    Route::put('/{id}', [ProfessionalServiceController::class, 'update']);
    Route::delete('/{id}', [ProfessionalServiceController::class, 'destroy']);
});

// PaymentData
Route::prefix('payment-ata')->group(function () {
    Route::get('/', [PaymentDataController::class, 'index']);
    Route::post('/', [PaymentDataController::class, 'store']);
    Route::put('/{id}', [PaymentDataController::class, 'update']);
    Route::delete('/{id}', [PaymentDataController::class, 'destroy']);
});

// Payment
Route::prefix('payment')->group(function () {
    Route::get('/', [PaymentController::class, 'index']);
    Route::post('/', [PaymentController::class, 'store']);
    Route::put('/{id}', [PaymentController::class, 'update']);
    Route::delete('/{id}', [PaymentController::class, 'destroy']);
});

// Receipt
Route::prefix('receipt')->group(function () {
    Route::get('/', [ReceiptController::class, 'index']);
    Route::post('/', [ReceiptController::class, 'store']);
    Route::put('/{id}', [ReceiptController::class, 'update']);
    Route::delete('/{id}', [ReceiptController::class, 'destroy']);
});

// Appointment
Route::prefix('appointment')->group(function () {
    Route::get('/', [AppointmentController::class, 'index']);
    Route::post('/', [AppointmentController::class, 'store']);
    Route::put('/{id}', [AppointmentController::class, 'update']);
    Route::delete('/{id}', [AppointmentController::class, 'destroy']);
});

// AppointmentReport
Route::prefix('appointment-report')->group(function () {
    Route::get('/', [AppointmentReportController::class, 'index']);
    Route::post('/', [AppointmentReportController::class, 'store']);
    Route::put('/{id}', [AppointmentReportController::class, 'update']);
    Route::delete('/{id}', [AppointmentReportController::class, 'destroy']);
});

// Gender
Route::prefix('gender')->group(function () {
    Route::get('/', [GenderController::class, 'index']);
    Route::post('/', [GenderController::class, 'store']);
    Route::put('/{id}', [GenderController::class, 'update']);
    Route::delete('/{id}', [GenderController::class, 'destroy']);
});

// Occupation
Route::prefix('occupation')->group(function () {
    Route::get('/', [OccupationController::class, 'index']);
    Route::post('/', [OccupationController::class, 'store']);
    Route::put('/{id}', [OccupationController::class, 'update']);
    Route::delete('/{id}', [OccupationController::class, 'destroy']);
});

// MaritalStatus
Route::prefix('marital-status')->group(function () {
    Route::get('/', [MaritalStatusController::class, 'index']);
    Route::post('/', [MaritalStatusController::class, 'store']);
    Route::put('/{id}', [MaritalStatusController::class, 'update']);
    Route::delete('/{id}', [MaritalStatusController::class, 'destroy']);
});

// Education
Route::prefix('education')->group(function () {
    Route::get('/', [EducationController::class, 'index']);
    Route::post('/', [EducationController::class, 'store']);
    Route::put('/{id}', [EducationController::class, 'update']);
    Route::delete('/{id}', [EducationController::class, 'destroy']);
});

// Country
Route::prefix('country')->group(function () {
    Route::get('/', [CountryController::class, 'index']);
    Route::post('/', [CountryController::class, 'store']);
    Route::put('/{id}', [CountryController::class, 'update']);
    Route::delete('/{id}', [CountryController::class, 'destroy']);
});

// State
Route::prefix('state')->group(function () {
    Route::get('/', [StateController::class, 'index']);
    Route::post('/', [StateController::class, 'store']);
    Route::put('/{id}', [StateController::class, 'update']);
    Route::delete('/{id}', [StateController::class, 'destroy']);
});

// City
Route::prefix('city')->group(function () {
    Route::get('/', [CityController::class, 'index']);
    Route::post('/', [CityController::class, 'store']);
    Route::put('/{id}', [CityController::class, 'update']);
    Route::delete('/{id}', [CityController::class, 'destroy']);
});

// Aga
Route::prefix('aga')->group(function () {
    Route::get('/', [AgaController::class, 'index']);
    Route::post('/', [AgaController::class, 'store']);
    Route::put('/{id}', [AgaController::class, 'update']);
    Route::delete('/{id}', [AgaController::class, 'destroy']);
});

// UserAccountStatus
Route::prefix('user-account-status')->group(function () {
    Route::get('/', [UserAccountStatusController::class, 'index']);
    Route::post('/', [UserAccountStatusController::class, 'store']);
    Route::put('/{id}', [UserAccountStatusController::class, 'update']);
    Route::delete('/{id}', [UserAccountStatusController::class, 'destroy']);
});

// PaymentStatus
Route::prefix('payment-status')->group(function () {
    Route::get('/', [PaymentStatusController::class, 'index']);
    Route::post('/', [PaymentStatusController::class, 'store']);
    Route::put('/{id}', [PaymentStatusController::class, 'update']);
    Route::delete('/{id}', [PaymentStatusController::class, 'destroy']);
});

// AppointmentStatus
Route::prefix('appointment-status')->group(function () {
    Route::get('/', [AppointmentStatusController::class, 'index']);
    Route::post('/', [AppointmentStatusController::class, 'store']);
    Route::put('/{id}', [AppointmentStatusController::class, 'update']);
    Route::delete('/{id}', [AppointmentStatusController::class, 'destroy']);
});