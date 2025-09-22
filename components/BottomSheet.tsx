
import { colors } from '../styles/commonStyles';
import React, { useEffect, useRef, useState } from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

interface SimpleBottomSheetProps {
  children?: React.ReactNode;
  isVisible?: boolean;
  onClose?: () => void;
}

const SNAP_POINTS = [0, 0.5, 0.9]; // Closed, half, full
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(62, 39, 35, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: SCREEN_HEIGHT * 0.5,
    maxHeight: SCREEN_HEIGHT * 0.9,
    boxShadow: '0px -4px 20px rgba(139, 69, 19, 0.2)',
    elevation: 10,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.accent,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 0,
  },
});

export default function SimpleBottomSheet({ children, isVisible = false, onClose }: SimpleBottomSheetProps) {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [panEnabled, setPanEnabled] = useState(true);

  useEffect(() => {
    console.log('BottomSheet visibility changed:', isVisible);
    if (isVisible) {
      // Show animation
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT * (1 - SNAP_POINTS[1]), // Start at half height
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Hide animation
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible, translateY, backdropOpacity]);

  const handleBackdropPress = () => {
    console.log('Backdrop pressed, closing bottom sheet');
    if (onClose) {
      onClose();
    }
  };

  const snapToPoint = (point: number) => {
    const toValue = SCREEN_HEIGHT * (1 - point);
    console.log('Snapping to point:', point, 'translateY:', toValue);
    
    Animated.spring(translateY, {
      toValue,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
  };

  const getClosestSnapPoint = (currentY: number, velocityY: number): number => {
    const currentProgress = 1 - currentY / SCREEN_HEIGHT;
    
    // If dragging down with significant velocity, close
    if (velocityY > 1000) {
      return SNAP_POINTS[0];
    }
    
    // If dragging up with significant velocity, go to full
    if (velocityY < -1000) {
      return SNAP_POINTS[2];
    }
    
    // Find closest snap point
    let closest = SNAP_POINTS[0];
    let minDistance = Math.abs(currentProgress - closest);
    
    for (const point of SNAP_POINTS) {
      const distance = Math.abs(currentProgress - point);
      if (distance < minDistance) {
        minDistance = distance;
        closest = point;
      }
    }
    
    return closest;
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { 
      useNativeDriver: true,
      listener: (event) => {
        const { translationY } = event.nativeEvent;
        const baseY = SCREEN_HEIGHT * (1 - SNAP_POINTS[1]);
        const newY = Math.max(0, baseY + translationY);
        
        // Update translateY manually for smooth dragging
        translateY.setValue(newY);
      }
    }
  );

  const onHandlerStateChange = (event) => {
    const { state, translationY, velocityY } = event.nativeEvent;
    
    if (state === State.END) {
      console.log('Gesture ended, translationY:', translationY, 'velocityY:', velocityY);
      const baseY = SCREEN_HEIGHT * (1 - SNAP_POINTS[1]);
      const currentY = baseY + translationY;
      const closestPoint = getClosestSnapPoint(currentY, velocityY);
      
      if (closestPoint === SNAP_POINTS[0]) {
        // Close the bottom sheet
        if (onClose) {
          onClose();
        }
      } else {
        // Snap to the closest point
        snapToPoint(closestPoint);
      }
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <Animated.View style={[styles.overlay, { opacity: backdropOpacity }]}>
          <TouchableWithoutFeedback>
            <PanGestureHandler
              onGestureEvent={onGestureEvent}
              onHandlerStateChange={onHandlerStateChange}
              enabled={panEnabled}
            >
              <Animated.View
                style={[
                  styles.bottomSheet,
                  {
                    transform: [{ translateY }],
                  },
                ]}
              >
                <View style={styles.handle} />
                <View style={styles.content}>
                  {children}
                </View>
              </Animated.View>
            </PanGestureHandler>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
