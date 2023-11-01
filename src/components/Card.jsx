import React from 'react';
import CardStyle from './CardStyle';

const Card = () => {
    const cardsData = [
        { title:`PUBG(PlayerUnknown's Battlegrounds)`,
          imageURL: "https://staticg.sportskeeda.com/editor/2022/11/c6604-16681359007577-1920.jpg?w=840",
          description:`PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds is a battle royale game developed by PUBG Studios and published by Krafton. The game, which was inspired by the Japanese film Battle Royale (2000), is based on previous mods created by Brendan "PlayerUnknown" Greene for other games, and expanded into a standalone game under Greene's creative direction. It is the first game in the PUBG Universe series.`
        },
        { title:`Fortnite`,
          imageURL: "https://variety.com/wp-content/uploads/2019/10/fortnite-season-x-out-of-time.png",
          description:`Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; Fortnite: Save the World, a cooperative hybrid tower defense-shooter and survival game in which up to four players fight off zombie-like creatures and defend objects with traps and fortifications they can build; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas.`
        },
        { title:`COD(Call of Duty)`,
          imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg",
          description:`Call of Duty is a video game series and media franchise published by Activision, starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare II, was released on October 28, 2022. The next title, Call of Duty: Modern Warfare III, will be released on November 10, 2023.`
        },
        {
          title:`COD(Call of Duty)`,
          imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg",
          description:`Call of Duty is a video game series and media franchise published by Activision, starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare II, was released on October 28, 2022. The next title, Call of Duty: Modern Warfare III, will be released on November 10, 2023.`
        },
        { title:`PUBG(PlayerUnknown's Battlegrounds)`,
        imageURL: "https://staticg.sportskeeda.com/editor/2022/11/c6604-16681359007577-1920.jpg?w=840",
        description:`PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds is a battle royale game developed by PUBG Studios and published by Krafton. The game, which was inspired by the Japanese film Battle Royale (2000), is based on previous mods created by Brendan "PlayerUnknown" Greene for other games, and expanded into a standalone game under Greene's creative direction. It is the first game in the PUBG Universe series.`
      },
      { title:`COD(Call of Duty)`,
          imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg",
          description:`Call of Duty is a video game series and media franchise published by Activision, starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare II, was released on October 28, 2022. The next title, Call of Duty: Modern Warfare III, will be released on November 10, 2023.`
        },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 m-10 border">
      {cardsData.map((card) => (
        <CardStyle  title={card.title} imageURL={card.imageURL} description={card.description} />
      ))}
    </div>
  );
};

export default Card;
