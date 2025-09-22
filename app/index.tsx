
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleBottomSheet from '../components/BottomSheet';
import Icon from '../components/Icon';
import { useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';

export default function MainScreen() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  });

  const menuItems = [
    {
      id: 1,
      name: 'Lofi Latte',
      description: 'Smooth espresso with steamed milk and a touch of vanilla',
      price: '$4.50',
      category: 'Coffee',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Chill Cappuccino',
      description: 'Classic cappuccino with perfect foam art',
      price: '$4.00',
      category: 'Coffee',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Mellow Mocha',
      description: 'Rich chocolate and espresso blend with whipped cream',
      price: '$5.00',
      category: 'Coffee',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'Zen Green Tea',
      description: 'Calming green tea with honey and lemon',
      price: '$3.50',
      category: 'Tea',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Cozy Croissant',
      description: 'Buttery, flaky croissant baked fresh daily',
      price: '$3.00',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1555507036-ab794f4afe5b?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      name: 'Peaceful Pastry',
      description: 'Seasonal fruit pastry with light glaze',
      price: '$3.50',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop'
    }
  ];

  const handleMenuItemPress = (item) => {
    console.log('Menu item pressed:', item.name);
    setSelectedMenuItem(item);
    setIsBottomSheetVisible(true);
  };

  const renderHomeContent = () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={commonStyles.content}>
        {/* Hero Section */}
        <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 40 }}>
          <Text style={[commonStyles.title, { fontSize: 36, marginBottom: 12 }]}>
            ☕ Lofi Coffee Shop
          </Text>
          <Text style={commonStyles.subtitle}>
            Where every sip tells a story
          </Text>
          <View style={{
            width: 60,
            height: 3,
            backgroundColor: colors.accent,
            borderRadius: 2,
            marginTop: 10
          }} />
        </View>

        {/* Welcome Card */}
        <View style={[commonStyles.card, { marginBottom: 30 }]}>
          <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '600', marginBottom: 12, color: colors.text }]}>
            Welcome to our cozy corner
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 0 }]}>
            Discover handcrafted beverages and fresh pastries in our relaxing lofi atmosphere. 
            Perfect for work, study, or simply unwinding with friends.
          </Text>
        </View>

        {/* Featured Items */}
        <View style={{ width: '100%', marginBottom: 20 }}>
          <Text style={[commonStyles.text, { fontSize: 20, fontWeight: '600', marginBottom: 16, color: colors.text }]}>
            Today&apos;s Favorites
          </Text>
          
          {menuItems.slice(0, 3).map((item) => (
            <TouchableOpacity
              key={item.id}
              style={commonStyles.menuCard}
              onPress={() => handleMenuItemPress(item)}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  marginRight: 16
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontSize: 16, fontWeight: '600', marginBottom: 4, textAlign: 'left' }]}>
                  {item.name}
                </Text>
                <Text style={[commonStyles.text, { fontSize: 14, color: colors.textLight, marginBottom: 0, textAlign: 'left' }]}>
                  {item.description}
                </Text>
              </View>
              <Text style={[commonStyles.text, { fontSize: 16, fontWeight: '600', color: colors.primary, marginBottom: 0 }]}>
                {item.price}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderRadius: 12,
              flex: 0.48,
              alignItems: 'center'
            }}
            onPress={() => setActiveTab('menu')}
          >
            <Text style={{
              color: colors.background,
              fontSize: 16,
              fontWeight: '600',
            }}>
              View Menu
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.accent,
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderRadius: 12,
              flex: 0.48,
              alignItems: 'center'
            }}
            onPress={() => setActiveTab('about')}
          >
            <Text style={{
              color: colors.text,
              fontSize: 16,
              fontWeight: '600',
            }}>
              About Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderMenuContent = () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={[commonStyles.content, { paddingTop: 20 }]}>
        <Text style={[commonStyles.title, { fontSize: 28, marginBottom: 20 }]}>
          Our Menu
        </Text>

        {['Coffee', 'Tea', 'Food'].map((category) => (
          <View key={category} style={{ width: '100%', marginBottom: 30 }}>
            <Text style={[commonStyles.text, { fontSize: 20, fontWeight: '600', marginBottom: 16, color: colors.primary }]}>
              {category}
            </Text>
            
            {menuItems.filter(item => item.category === category).map((item) => (
              <TouchableOpacity
                key={item.id}
                style={commonStyles.menuCard}
                onPress={() => handleMenuItemPress(item)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    marginRight: 16
                  }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '600', marginBottom: 6, textAlign: 'left' }]}>
                    {item.name}
                  </Text>
                  <Text style={[commonStyles.text, { fontSize: 14, color: colors.textLight, marginBottom: 0, textAlign: 'left' }]}>
                    {item.description}
                  </Text>
                </View>
                <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '600', color: colors.primary, marginBottom: 0 }]}>
                  {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderAboutContent = () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={[commonStyles.content, { paddingTop: 20 }]}>
        <Text style={[commonStyles.title, { fontSize: 28, marginBottom: 20 }]}>
          About Lofi Coffee Shop
        </Text>

        <View style={[commonStyles.card, { marginBottom: 20 }]}>
          <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '600', marginBottom: 12, color: colors.text, textAlign: 'left' }]}>
            Our Story
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 0 }]}>
            Founded in 2020, Lofi Coffee Shop was born from a passion for creating the perfect 
            atmosphere for creativity and relaxation. We believe that great coffee should be 
            accompanied by great vibes, soft music, and a welcoming community.
          </Text>
        </View>

        <View style={[commonStyles.card, { marginBottom: 20 }]}>
          <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '600', marginBottom: 12, color: colors.text, textAlign: 'left' }]}>
            Our Mission
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 0 }]}>
            To provide a peaceful sanctuary where people can enjoy exceptional coffee, 
            connect with others, and find inspiration in a cozy, lofi-inspired environment.
          </Text>
        </View>

        <View style={[commonStyles.card, { marginBottom: 20 }]}>
          <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '600', marginBottom: 12, color: colors.text, textAlign: 'left' }]}>
            What Makes Us Special
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 8 }]}>
            • Ethically sourced, single-origin coffee beans
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 8 }]}>
            • Curated lofi playlist for the perfect ambiance
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 8 }]}>
            • Fresh pastries baked daily by local artisans
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 8 }]}>
            • Cozy seating areas perfect for work or relaxation
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 0 }]}>
            • Free Wi-Fi and plenty of power outlets
          </Text>
        </View>

        <View style={[commonStyles.card, { marginBottom: 20 }]}>
          <Text style={[commonStyles.text, { fontSize: 18, fontWeight: '600', marginBottom: 12, color: colors.text, textAlign: 'left' }]}>
            Visit Us
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 8 }]}>
            📍 123 Cozy Street, Downtown
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 8 }]}>
            🕐 Mon-Fri: 6:00 AM - 9:00 PM
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 8 }]}>
            🕐 Sat-Sun: 7:00 AM - 10:00 PM
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 0 }]}>
            📞 (555) 123-LOFI
          </Text>
        </View>
      </View>
    </ScrollView>
  );

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={commonStyles.container}>
        <View style={commonStyles.content}>
          <Text style={commonStyles.text}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      {/* Main Content */}
      <View style={{ flex: 1 }}>
        {activeTab === 'home' && renderHomeContent()}
        {activeTab === 'menu' && renderMenuContent()}
        {activeTab === 'about' && renderAboutContent()}
      </View>

      {/* Bottom Navigation */}
      <View style={commonStyles.bottomNav}>
        <TouchableOpacity
          style={[
            commonStyles.navButton,
            activeTab === 'home' && commonStyles.navButtonActive
          ]}
          onPress={() => {
            console.log('Home tab pressed');
            setActiveTab('home');
          }}
        >
          <Icon
            name="home"
            size={24}
            color={activeTab === 'home' ? colors.primary : colors.textLight}
          />
          <Text style={{
            fontSize: 12,
            color: activeTab === 'home' ? colors.primary : colors.textLight,
            marginTop: 4,
            fontFamily: 'OpenSans_400Regular'
          }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            commonStyles.navButton,
            activeTab === 'menu' && commonStyles.navButtonActive
          ]}
          onPress={() => {
            console.log('Menu tab pressed');
            setActiveTab('menu');
          }}
        >
          <Icon
            name="restaurant"
            size={24}
            color={activeTab === 'menu' ? colors.primary : colors.textLight}
          />
          <Text style={{
            fontSize: 12,
            color: activeTab === 'menu' ? colors.primary : colors.textLight,
            marginTop: 4,
            fontFamily: 'OpenSans_400Regular'
          }}>
            Menu
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            commonStyles.navButton,
            activeTab === 'about' && commonStyles.navButtonActive
          ]}
          onPress={() => {
            console.log('About tab pressed');
            setActiveTab('about');
          }}
        >
          <Icon
            name="information-circle"
            size={24}
            color={activeTab === 'about' ? colors.primary : colors.textLight}
          />
          <Text style={{
            fontSize: 12,
            color: activeTab === 'about' ? colors.primary : colors.textLight,
            marginTop: 4,
            fontFamily: 'OpenSans_400Regular'
          }}>
            About
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet for Menu Item Details */}
      <SimpleBottomSheet
        isVisible={isBottomSheetVisible}
        onClose={() => {
          console.log('Bottom sheet closed');
          setIsBottomSheetVisible(false);
          setSelectedMenuItem(null);
        }}
      >
        {selectedMenuItem && (
          <View style={{ padding: 20 }}>
            <Image
              source={{ uri: selectedMenuItem.image }}
              style={{
                width: '100%',
                height: 200,
                borderRadius: 12,
                marginBottom: 20
              }}
            />
            <Text style={[commonStyles.title, { fontSize: 24, marginBottom: 8, textAlign: 'left' }]}>
              {selectedMenuItem.name}
            </Text>
            <Text style={[commonStyles.text, { fontSize: 18, color: colors.primary, fontWeight: '600', marginBottom: 12, textAlign: 'left' }]}>
              {selectedMenuItem.price}
            </Text>
            <Text style={[commonStyles.text, { textAlign: 'left', marginBottom: 20 }]}>
              {selectedMenuItem.description}
            </Text>
            
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                paddingVertical: 16,
                borderRadius: 12,
                alignItems: 'center',
                marginBottom: 12
              }}
              onPress={() => {
                console.log('Order placed for:', selectedMenuItem.name);
                setIsBottomSheetVisible(false);
                setSelectedMenuItem(null);
              }}
            >
              <Text style={{
                color: colors.background,
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'OpenSans_600SemiBold'
              }}>
                Order Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: colors.backgroundAlt,
                paddingVertical: 16,
                borderRadius: 12,
                alignItems: 'center'
              }}
              onPress={() => {
                console.log('Add to favorites:', selectedMenuItem.name);
              }}
            >
              <Text style={{
                color: colors.text,
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'OpenSans_600SemiBold'
              }}>
                Add to Favorites ❤️
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </SimpleBottomSheet>
    </SafeAreaView>
  );
}
