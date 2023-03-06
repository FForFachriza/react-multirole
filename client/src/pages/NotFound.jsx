import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const NotFound = () => {
  const dispatch = useDispatch();
  const getPadding = useSelector((state) => state.padding.padding);
  const arrayPhoto = [
    "http://pm1.narvii.com/7285/4a6477ad5bb0e5dbb5924787ea7a5e05e0700fd8r1-564-1003v2_uhq.jpg",
    "https://i1.sndcdn.com/avatars-aywA5yT4HPqSVKZN-3wZ2fQ-t500x500.jpg",
    "https://i.pinimg.com/originals/36/c1/2d/36c12d09720194bf90c34bdfc865b1e0.png",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Featured-Image-11.jpg",
  ];
  const [getPhoto, setPhoto] = useState([""]);

  useEffect(() => {
    const random = Math.floor(Math.random() * arrayPhoto.length);
    setPhoto(arrayPhoto[random]);
  }, []);
  return (
    <section className={`${getPadding} duration-300 transition-all`}>
      <div className="h-screen bg-black">
        <p
          className="leading-3 h-screen overflow-hidden bg-no-repeat bg-center bg-cover text-transparent bg-clip-text text-sm text-justify"
          style={{ backgroundImage: `url(${getPhoto})` }}
        >
          Rin Tohsaka (遠坂 凛, Tōsaka Rin?) is one of the three main heroines of Fate/stay night who acts as the Master of Archer in the
          Fifth Holy Grail War. She is the current head of the Tohsaka family and the biological older sister of Sakura Matou. After the
          events of the Holy Grail War, she formally joins the Clock Tower and studies under the tutelage of Lord El-Melloi II in the
          El-Melloi Classroom. She appears in the The Adventures of Lord El-Melloi II as a major character. As part of the El-Melloi
          Classroom, she is one of the many Masters of True Rider in the True and False Holy Grail Wars of Fate/strange Fake. Rin is a young
          woman with aqua eyes and long wavy brown hair in a two-side-up hairstyle, which consists of part of her being made into twin tails
          tied with black ribbons, while the majority hangs loose. During school, she wears the standard Homurahara uniform, which she
          sometimes accompanies with a long red coat. Her casual clothing consists of a red turtleneck, a black skirt and long black
          stockings under brown leather flats. When she was young, she did her hair up in twin tails entirely, and her clothing consisted of
          a white shirt with a red necktie, a red skirt and long black socks, much like when she becomes older. In the fifth Holy Grail War,
          she prepared a plain skirt and shirt for Saber, though it was originally a birthday present from Kirei.[17] As an adult, she put
          down her hair. Two years after the Heaven's Feel route ending, she wears a long sleeve red shirt and a long maroon skirt. Her
          alternative costume is a long red jacket, a white polo neck jumper, a black mini skirt and long leather boots. Rin is a
          perceptive, serious, resourceful, and very competitive person. Though she is widely admired at school as a prim and proper honor
          student, it is a front she puts up in order to prevent others from prying into her life. In private, she is notably loud, shrewd,
          stingy, and bossy but usually means well for those she cares about. She is known as a model student and idol of her school. Her
          manner of speech is often hostile and dismissive of other people, but deep down she has a caring, big-sisterly disposition. Her
          tendency of making trivial mistakes at the worst possible moment is a hereditary curse. Though she really is a lot nicer than she
          seems, she claims to always make her decisions based on cold, rational logic in the end. In her own words, it's "not a very cute
          personality". In fact, her choice in personal clothes is probably an overreaction to that.[18] Despite claiming that she would do
          anything in order to win the Holy Grail War, no matter how underhanded, she has a deeply rooted sense of honor, seen refusing to
          dispose of Shirou despite numerous easy chances of doing so, simply because she owes him and deem disposing of him without
          clearing her debts to be cheap. In short, Rin is a tough, fiery, perceptive, judicious, mischievous, and considerably aggressive
          tsundere who shows both sides of the trope. During her childhood, she understood the Fourth Holy Grail War about as much as Shirou
          understands the Fifth, seemingly understanding while not actually comprehending it. She saw her father as a great magus who must
          be respected and loved, but failed to understand the negative aspect of his personality, the coldheartedness that accompanied such
          an ideal. If he had lived until Rin could actually understand his personality, it is likely that it would have greatly affected
          the development of her own personality. It is unknown if she would have opposed such inhumanity and left the path of a magus, or
          if she would have become a “perfect and coldhearted” magus like her father. Either fate for Rin would have been one far away from
          happiness.[19] Due to Tokiomi's early and untimely death, she was not aware of the original goal of the Holy Grail War to open a
          “hole” beyond the World.[20] For the sake of her deceased father and her family's name, Rin seeks to obtain the Holy Grail, though
          she has little personal desire for it. Unbeknownst to her sister Sakura, Rin feels guilty and believes that she has abandoned
          Sakura after she is adopted into the Matou household, so much the guilt was what driven her to revive Shirou, Sakura's target of
          affection, at the brink of death. While Rin eventually admits that she has always watched Sakura from afar, she never realized how
          much Sakura suffered under the Matou and fooled herself into thinking Sakura was happy to alleviate her own guilt. She spent just
          as much time quarrelling with Shirou as she did cooperating with him. She's a mischievous girl at heart, so she loves teasing
          serious people such as Shirou.[18] However, Rin did want to kill him when she saw his Gradation Air in his shed, thinking that he
          lied to her.[21] Although she claimed to be not interested in anyone, the Heaven's Feel scenario revealed that Rin has been
          attracted to Shirou after witnessing his stubborn attempts to finish a high jump that he had no chance of finishing when they were
          younger. Rin was very supportive of Shirou's relationship with Saber in the Fate route. In the Unlimited Blade Works, they became
          aware of their mutual crush and attraction which developed to love. In Heaven's Feel, Rin reveals her attraction to Shirou while
          giving advice for Sakura and their closeness makes Sakura jealous and resentful of Rin. Her hobbies include admiring jewels.[18]
          Although wealthy from her family's magical patents, she feels somewhat ashamed of having to rely on the work of previous
          generations.[22] Rin appears as a minor character in Fate/Zero. She first appeared when Kariya Matou visited her and her mother
          Aoi. During Kariya and Aoi's conversation, it is revealed that Sakura was sent to the Matou family, an incident which deeply upset
          Rin and she avoids speaking of it. Shortly before the war begins, Rin's father Tokiomi acquires Kirei Kotomine as a student.
          Despite her father's confidence in his abilities, Rin is wary of Kotomine, going so far as questioning him to determine if she can
          trust him to protect her father, and decides she just can't like people like him when he doesn't give her the response she wants
          to hear. Ironically, Kirei would be the one to murder her father later on. Throughout the Fourth Grail War, Rin and Aoi reside
          with Rin's maternal grandparents outside of Fuyuki City for their own personal safety. When children begin disappearing from
          Fuyuki City as a result of Ryuunosuke Uryuu and Caster kidnapping them, Rin sets out on her own to find one of the missing
          children, a girl named Kotone whom Rin was friends with. Using her elementary magic skills and a magical compass from her father,
          Rin's attempt goes awry and she winds up lost and in danger of being attacked by Caster's monsters. Her mother finds her shortly
          after Rin is saved by Kariya, though Rin fainted soon after seeing the terrible changes to Kariya's face.[25] The anime expands
          Rin's short adventure, resulting in her meeting Ryuunosuke Uryuu in person and freeing the children he kidnapped. While escaping,
          she is attacked by Caster's Horror, though she is saved by Kariya. The incident concludes as it did in the novel, where Rin faints
          and Kariya brings her to a park where Aoi finds them.[26] When Tokiomi visits his wife and daughter one last time before the
          conclusion of the war, he presents Rin with a book, as well as advice and encouragement for her to become a powerful magus. The
          meeting would be the last time Rin ever saw her father before his death. Prior to his demise, Tokiomi arranges for Kotomine Kirei
          to become her guardian and teacher until she comes of age. Rin's final appearance occurs in the epilogue of the series, during the
          funeral of her father. Thanks to Tokiomi's careful preparations, she has already obtained most of her family's crest and has
          become the next head of the Tohsaka family despite her young age. Rin shows no visible distress at her father's death, even as she
          is forced to care for her mother, who suffers from brain damage and still believes that Sakura and Tokiomi are with her, leaving
          Rin to feel lonely within her own home. Kirei, in hopes of eliciting an unhappy reaction from Rin, gives her the Azoth Sword,
          telling her that her father had given it to him but omitting that he had used it to kill Tokiomi; to Kotomine's secret delight,
          Rin is overcome with emotion and weeps. Rin is the protagonist of the prologue of Fate/stay night Unlimited Blade Works, detailing
          her first three days involved in the 5th Holy Grail War. In her dialogues, she reveals to her Servant Archer that she is only
          participating in the war out of her own competitive desire to become the winner. She also expresses dissatisfaction with Archer,
          for she was attempting to summon a Saber-class Servant, though she quickly grows accustomed to him. After scouting out Fuyuki
          City, Rin. is caught off-guard at Homurahara Academy by Lancer, who then engages in battle with Archer. This fight is interrupted,
          however, when Shirou Emiya is discovered and fatally wounded by Lancer; Rin, who felt sympathy for Shirou - and Sakura (in UBW) -,
          used her family's treasured pendant, which possessed a strong concentration of Mana, to repair his heart.[27] After she returns
          home, she realizes Lancer will continue to hunt Shirou when he discovers that Shirou is not dead, prompting her to sprint toward
          Shirou's neighborhood. It is here that she first encountered Saber, and the three Fate/stay night scenarios branch off. In all
          three scenarios, Rin helps and allies with Shirou. By the conclusion of the prologue, Rin would have used two Command Spells on
          Archer; the first is to force him into submission after he acts insubordinately to her after he is summoned. The second is to
          force him into ethereal form before he is killed by Saber, except for the Unlimited Blade Works path where Shirou uses a Command
          Spell to stop Saber's attack instead. In all scenarios, her position as protagonist is given to Shirou.« Look, Saber will
          disappear if you're killed. If you want to save Saber, think of a way to do so from a safe place...Geez, don't you understand that
          protecting your Servant with your life is just meaningless? » (Rin explaining Shirou about Servants - Fate, Day 4).Rin acts as an
          advisor to Shirou, dutifully attempting to school him in traditional sorcery in light of his powerful Servant, Saber. Although
          Shirou's recklessness results in the death of Archer, she bears Shirou no ill-will, though she hides bitterness at her loss of
          both her Servant and her chance at winning the war. Rin is later badly injured by Kotomine in Shirou's home while trying to
          protect Illya, though she is saved by the arrival of Shirou before giving him the Azoth Sword which she got from Kotomine as a
          child ten years prior (which he got from Rin's father and used it to murder him in turn with). Ultimately, she survives and
          ultimately leaves for London after the war to become a true magus (although she stays in Fuyuki to train in the anime). « Yeah, I
          know. I'll do my best. I'll do my best so that he won't get twisted like you. I'll do my best so that he will be able to like
          himself...! So you should also... » (Rin saying her final goodbye to Archer - Unlimited Blade Works, Day 16) After learning that
          Shirou is a complete novice, Rin takes him to Kotomine Church and introduces him to Kirei so that he can have the Holy Grail War
          explained to him, believing she owed him that much. Upon leaving, they are attacked by Ilya and her Servant, Berserker, forcing
          both teams to work together. The fight leaves Shirou wounded, and Rin helps Saber get him home, staying to make sure his injuries
          are healed before making to leave. When Shirou tries to thank her, she reminds him that the Holy Grail War is a fight to the death
          and the next time they meet, it will be as enemies. The next day, Shirou shows up for school as he normally would and angers Rin,
          who feels he's ignored her warning. While looking for the source of the school's barrier, she comes across Shirou again. She
          immediately switches her attention, deciding to make good on her threat on sight. Rin launches her assault, relentlessly pursuing
          Shirou with the intent to kill him unless he surrenders Saber's Command Spells. She is interrupted at the last moment by the
          sudden appearance of Rider, who attacks a student. Shirou and Rin promptly team up to drive Rider away and call a truce. Forming
          an alliance, they begin searching for possible candidates for Rider's Master. Shirou finds himself whisked away to Ryuudou Temple
          by Caster, who also wishes to take away his Command Spells. Archer interrupts and saves Shirou while Saber confronts Assassin. It
          is at this moment that Shirou starts to get even more irritated by Archer, who has looked down on his ideals. Archer then attacks
          Shirou, but is stopped by Saber and Assassin. While they are fighting at Ryuudou Temple, Rin begins to have dreams about Archer
          and his past as a hero who was betrayed by his ideals. After she finds out about Archer going to the temple to kill Shirou, Rin
          apologizes to Shirou for Archer's actions and tells him that she used a Command Spell to order Archer to never attack Shirou. The
          following day, Shinji Matou reveals himself as Rider's Master when he has her use Blood Fort Andromeda to attack the school and
          everyone in it. A second Servant attacks at the same time, and Saber is summoned. While she fights the Servant, who turns out to
          be Caster, Rin and Shirou fight their way through golems to get to Rider and stop her. They arrive only to find she's already been
          killed, though Shinji runs away without telling them who killed her. With Rider defeated, Rin and Shirou's focus shifts to
          uncovering the identity of Caster's Master, suspecting that it has to be someone else from the school. When it seems that it might
          be a teacher, Souichirou Kuzuki, Rin takes the lead and plans an ambush to reveal his identity as a Master or not. Since Archer
          had suggested they ally with Caster instead of Shirou, Rin decides to leave him behind and only bring Shirou and Saber, not
          wanting Archer to be around Caster and thinking Saber would be more than enough to handle the situation. The plan works initially,
          confirming Kuzuki's role as Caster's Master, but things quickly sour when he and Caster fight back. Nearly overwhelmed by their
          combined strength, they are saved only by the surprise of Shirou's projection attacks and Kuzuki's call to retreat rather than
          fight further. In order to make it easier to plan and strategize, Rin comes to stay at Shirou's house. In response to a
          conversation they had the night before that made Rin realize Shirou doesn't do anything for himself and his own enjoyment, Rin
          takes Shirou on a date packed with fun-filled activities the next day, bringing Saber along. Upon returning home, they find Caster
          holding Taiga as hostage. When Shirou tries to follow her demands, Caster releases Taiga and strikes Saber with Rule Breaker,
          transferring Shirou's Command Spells to her. Against her will, Saber is forced to attack Rin and Shirou is stabbed through the
          shoulder when he tries to protect her. At Saber's urging, Shirou and Rin leave; in the anime, Archer arrives to help them, and
          with his aid they are able to get away without further incident. With his Command Spells gone, Rin declares that she will fight
          Kuzuki and Caster with only Archer, despite Shirou's protests. 182837-rin shirou2 super.png Shirou follows Rin and witnesses her
          confronting Kuzuki and Caster in Kotomine Church, their new base of operations. To her shock, Archer suddenly betrays Rin and
          attacks her. Shirou saves her and, although she is reluctant, she eventually thanks him and accepts his help again. With Archer
          gone, both decide to ask Ilya and Berserker for their help. Unfortunately, they arrive too late and find that Shinji and Gilgamesh
          have already killed them. Lancer shows up shortly afterwards, however, with orders to help them take down Caster if they are
          willing to cooperate together. Out of options, they accept. They return to the Kotomine Church, where Lancer fights Archer again.
          Archer admits defeat and retreats into the church. Meanwhile, Shirou and Rin team up to fight Kuzuki and Caster, ending in a
          stalemate until Rin turns the tables, attacking Caster not with magecraft but martial arts, and nearly killing her. Kuzuki
          prevents her from delivering the final blow, and Caster tries to use a spell to completely dominate Saber and send her against
          Shirou and Rin. But before she can, Archer arrives and attacks Kuzuki, killing Caster when she takes the strike for him. Even with
          both of them defeated, Archer is still not on their side, however, and he reveals his true motives and intent to kill Shirou. Rin
          makes a new contract with Saber, thereby making her Saber's Master, to stop him. Archer then kidnaps Rin and takes her as a
          hostage to Einzbern Castle. There, Shinji tries to rape her, despite her warnings that he is just being manipulated. Further,
          Kirei arrives and reveals his plot to kill Rin and turn her body into the vessel for the Lesser Grail, finally revealing to Rin's
          fury that he murdered her father as well. She is ultimately rescued by Lancer, who kills Kirei and drives off Shinji before dying
          himself. Rin makes her way out of the basement and to the upper hall of the castle just in time to see the conclusion of Archer
          and Shirou's fight. Moments later, Gilgamesh appears and attempts to kill Shirou and Archer both. Archer saves Shirou by pushing
          him out of the way, falling under the full assault of Gilgamesh's attack and disappearing before Rin's eyes, much to her grief.
          Gilgamesh reveals the true nature of the Grail to her, Shirou, and Saber, along with his plans to use it to eradicate mankind.
          Shirou, Rin and Saber go back to the Emiya household to make a plan to stop Gilgamesh and deal with the Grail. After giving Shirou
          enough mana to access his Reality Marble, they set out and reach Gilgamesh's new hideout, Ryuudou Temple. Rin saves Shinji, who
          had been used as the Grail's core, fighting off its manifested curses and attempts to pull him back in, even as it tried to
          swallow them in a mass of flesh. Upon escaping, Rin uses her final Command Spell to order Saber to destroy the Grail. Meanwhile,
          Shirou successfully defeats Gilgamesh. However, Gilgamesh tries one last time to make him the new incarnation of the Holy Grail.
          Fortunately, Archer, who also appeared to help Rin at the same time, comes to Shirou's aid. Rin bids her Servant goodbye as Archer
          tells her to take care of his younger self, hoping that her care for Shirou will change the future and grant his wish to save
          Shirou from his ideals. In the end, Rin finally sees Archer with a genuine smile, the same one as Shirou's. Rin's True Ending In
          Rin's True Ending, she heads off to the Mages' Association after she graduates, and asks Shirou if he would be willing to travel
          with her to London as her apprentice so they can stay together and she can watch over him, though they both know he would say yes.
          Its also established in this ending that they have officially entered into a romantic relationship following the end of the 5th
          Grail War.[23] In Rin's Good Ending, she keeps Saber as her Servant, and Rin and Shirou live a normal happy life as a couple. Rin
          is the Winner of the 5th Grail War in this route.[24]
        </p>
      </div>
    </section>
  );
};

export default NotFound;
