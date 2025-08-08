// Data Model for AI-powered IoT Device Dashboard

// Device Model
class Device {
  constructor(deviceId, deviceName, sensorData) {
    this.deviceId = deviceId;
    this.deviceName = deviceName;
    this.sensorData = sensorData;
  }
}

// Sensor Model
class Sensor {
  constructor(sensorId, sensorType, sensorValue) {
    this.sensorId = sensorId;
    this.sensorType = sensorType;
    this.sensorValue = sensorValue;
  }
}

// Dashboard Model
class Dashboard {
  constructor(dashboardId, deviceId, sensorData) {
    this.dashboardId = dashboardId;
    this.deviceId = deviceId;
    this.sensorData = sensorData;
    this.aiModel = new AIModel();
  }

  updateSensorData(newSensorData) {
    this.sensorData = newSensorData;
    this.aiModel.update(newSensorData);
  }
}

// AI Model
class AIModel {
  constructor() {
    this.model = null;
    this.trainingData = [];
  }

  update(newSensorData) {
    this.trainingData.push(newSensorData);
    this.trainModel();
  }

  trainModel() {
    // TO DO: Implement AI model training using a machine learning library
    console.log("AI Model Trained!");
  }

  predict() {
    // TO DO: Implement AI model prediction using a machine learning library
    console.log("Prediction Made!");
  }
}

// Sample Data
let device1 = new Device("DEV001", "Temperature Sensor", [
  new Sensor("SEN001", "Temperature", 25),
  new Sensor("SEN002", "Humidity", 60),
]);

let dashboard1 = new Dashboard("DASH001", device1.deviceId, device1.sensorData);

// Update Sensor Data
setTimeout(() => {
  let newSensorData = [
    new Sensor("SEN001", "Temperature", 27),
    new Sensor("SEN002", "Humidity", 65),
  ];
  dashboard1.updateSensorData(newSensorData);
}, 5000);