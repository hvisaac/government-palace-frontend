import { Injectable } from '@angular/core';
import { IonIcon, Platform } from '@ionic/angular';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: L.Map;
  coordinates

  public markerLatitude: number;
  public markerLongitude: number;

  constructor(
    public http: HttpClient,
    public Platform: Platform,
  ) { }

  async initOSM(latitude: number, longitude: number, map: string) {

    this.coordinates = await Geolocation.getCurrentPosition()
    this.markerLatitude = latitude;
    this.markerLongitude = longitude;
    this.map = L.map(map).setView([latitude, longitude], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const marker = L.marker([latitude, longitude], {
      draggable: true,
    }).addTo(this.map)

    marker.on('dragend', () => {
      this.markerLatitude = marker.getLatLng().lat;
      this.markerLongitude = marker.getLatLng().lng;
    });
    console.log('current position -> ', this.coordinates);
  }

  async initOSMWithDescription(latitude: number, longitude: number, map: string, img: string) {

    const popuphtml = `<img width='100%' height='100%' src='${img}' />`;

    this.coordinates = await Geolocation.getCurrentPosition()
    this.map = L.map(map).setView([latitude, longitude], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([latitude, longitude]).addTo(this.map)
      .bindPopup(popuphtml)
      .openPopup();

    console.log('current position -> ', this.coordinates);
  }

}

