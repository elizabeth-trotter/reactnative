import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import footsaiah from '../assets/codestack_logo.png'
import cat from '../assets/pawprints.png'
import StoriesComponent from './StoriesComponent'
import { faHeart, faPaperPlane, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const PostComponent = () => {
  const [posts, setPosts] = useState([
    {
      ProfilePicture: footsaiah,
      Username: "Mr. footsaiah",
      Image: cat,
      NumOfLikes: "9,999",
      Description: "Look at this Cool cat! So Inspiring!",
      Comments: [
        {
          UserWhoCommented: "caterpop_89",
          UsersComment: "Das me!",
        },
      ],
    },
    {
      ProfilePicture: cat,
      Username: "caterpop_89",
      Image: footsaiah,
      NumOfLikes: "6,545",
      Description: "FOR FREE L O L XD??? Follow my boy on twitch!",
      Comments: [
        {
          UserWhoCommented: "Mr. footsaiah",
          UsersComment: "L O L Thanks caterpop_89!",
        },
      ],
    },
  ]);

  return (
    <ScrollView>
      <StoriesComponent />

      {
        posts.map((post, idx) => {
          return (
            <View key={idx}>
              {/* This div will be the top of our posts user img, username, 3 dots */}
              <View style={Style.ProfileNav}>
                <View style={{ paddingTop: 10 }}>
                  <Image source={post.ProfilePicture} style={Style.ImageStyle} />
                </View>
                <View style={Style.ProfileUsername}>
                  <Text style={Style.UsernameText}>{post.Username}</Text>
                </View>
                <View style={Style.DotsDiv}>
                  <Text style={Style.DotsText}>.</Text>
                  <Text style={Style.DotsText}>.</Text>
                  <Text style={Style.DotsText}>.</Text>
                </View>
              </View>
              {/* This div will be for our Post Image */}
              <View>
                <Image source={post.Image} style={Style.ImagePost} />
              </View>
              {/* This div will be our Icons and Likes Parent Div */}
              <View style={{flexDirection: 'row'}}>
                {/* Icons Div */}
                <View style={{ flex: 1, flexDirection: 'row', paddingRight: 5, paddingLeft: 14, paddingTop: 10 }}>
                  <FontAwesomeIcon icon={faHeart} style={{ color: 'white', marginRight: 20 }} size={25} />
                  <FontAwesomeIcon icon={faComment} style={{ color: 'white', marginRight: 20, transform: [{ rotateY: '180deg' }] }} size={25} />
                  <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white', marginRight: 20 }} size={25} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 14, justifyContent: 'center', paddingTop: 10 }}>
                  <FontAwesomeIcon icon={faBookmark} style={{ color: 'white', marginRight: 20 }} size={25} />
                </View>
              </View>

            </View>
          )
        })
      }
    </ScrollView>
  )
}

export default PostComponent

const Style = StyleSheet.create({
  ProfileNav: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  ImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  UsernameText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  ProfileUsername: {
    paddingLeft: 20,
    justifyContent: 'center',
    paddingTop: 10
  },
  DotsDiv: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    marginBottom: -5
  },
  DotsText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 10
  },
  ImagePost: {
    height: 400,
    width: '100%'
  }
})