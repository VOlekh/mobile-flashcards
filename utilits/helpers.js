//NOTIFICATIONS from Udacy Fitness
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';


const NOTIFICATION_KEY = 'MobileFlashcards:notifications';

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }


export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      console.log("NOTIFICATION_KEY", data);
      if(data === null) {
           Notifications.requestPermissionsAsync().then(({ granted }) => {
              if (granted) {
                Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                    let tommorow = new Date();
                    tommorow.setDate(tommorow.getDate() + 1);
                    tommorow.setHours(24);
                    tommorow.setMinutes(47);

                    Notifications.scheduleNotificationAsync({
                      content: {
                        title: 'Study your quiz!',
                        body: '👋 don\'t forget to study today!',
                      },
                      trigger: {
                        time: tommorow,
                        repeat: "day",
                      },
                    })
                      .then(() => { AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)) } )
                });
              }
          });
      }
    });
}