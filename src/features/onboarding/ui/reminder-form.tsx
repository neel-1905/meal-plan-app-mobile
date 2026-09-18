import { ReminderDay } from "@/features/user-preferences/types/user-preferences.types";
import { DayInput, TimeInput } from "@/shared/components/inputs";
import { AppSwitch, AppText } from "@/shared/components/ui";
import { DAYS } from "@/shared/constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

const formatDay = (day: ReminderDay) =>
  day.charAt(0) + day.slice(1).toLowerCase();

interface ReminderFormProps {
  isEnabled: boolean;
  reminderTime: string | null;
  reminderDay: ReminderDay | null;
  onEnabledChange: (value: boolean) => void;
  onTimeChange: (value: string) => void;
  onDayChange: (value: ReminderDay) => void;
}

export const ReminderForm = ({
  isEnabled,
  reminderTime,
  reminderDay,
  onEnabledChange,
  onTimeChange,
  onDayChange,
}: ReminderFormProps) => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDayPicker, setShowDayPicker] = useState(false);

  const [timePickerKey, setTimePickerKey] = useState(0);

  const getTimeDate = () => {
    const date = new Date();

    if (reminderTime) {
      const [hours, minutes] = reminderTime.split(":").map(Number);

      date.setHours(hours);
      date.setMinutes(minutes);
    }

    return date;
  };

  const handleTimePress = () => {
    if (!isEnabled) return;

    setTimePickerKey((key) => key + 1);
    setShowTimePicker(true);
  };

  const handleTimeChange = (_event: any, selectedDate?: Date) => {
    setShowTimePicker(false);

    if (!selectedDate) return;

    const hours = selectedDate.getHours().toString().padStart(2, "0");

    const minutes = selectedDate.getMinutes().toString().padStart(2, "0");

    onTimeChange(`${hours}:${minutes}`);
  };

  const handleDayPress = () => {
    if (!isEnabled) return;

    setShowDayPicker(true);
  };

  const handleDaySelect = (day: ReminderDay) => {
    onDayChange(day);
    setShowDayPicker(false);
  };

  return (
    <View className="gap-5">
      <View className="flex-row items-center justify-between">
        <AppText variant="semibold" className="text-base">
          Remind me to make a meal plan
        </AppText>

        <AppSwitch value={isEnabled} onValueChange={onEnabledChange} />
      </View>

      <View className="gap-3">
        <TimeInput
          label="Time"
          disabled={!isEnabled}
          value={reminderTime}
          onPress={handleTimePress}
        />

        <DayInput
          label="Day"
          disabled={!isEnabled}
          value={reminderDay}
          onPress={handleDayPress}
        />
      </View>

      {showTimePicker && (
        <DateTimePicker
          key={timePickerKey}
          value={getTimeDate()}
          mode="time"
          is24Hour={false}
          onValueChange={handleTimeChange}
        />
      )}

      <Modal
        visible={showDayPicker}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDayPicker(false)}
      >
        <Pressable
          className="flex-1 justify-end bg-black/40"
          onPress={() => setShowDayPicker(false)}
        >
          <Pressable
            className="rounded-t-3xl bg-background p-5"
            onPress={(event) => event.stopPropagation()}
          >
            <Text className="mb-4 text-lg font-semibold text-foreground">
              Select reminder day
            </Text>

            <View className="gap-2">
              {DAYS.map((day) => (
                <Pressable
                  key={day}
                  onPress={() => handleDaySelect(day)}
                  className={`rounded-xl px-4 py-3 ${
                    reminderDay === day ? "bg-primary" : "bg-background-muted"
                  }`}
                >
                  <Text
                    className={`font-sans ${
                      reminderDay === day ? "text-white" : "text-foreground"
                    }`}
                  >
                    {formatDay(day)}
                  </Text>
                </Pressable>
              ))}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};
