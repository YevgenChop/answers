/* question:
What are the differences between Subject, BehaviorSubject and ReplaySubject?  
And in what situation would you use each of these (please provide example scenarios)?

answer:
Subjects - the listener responds to each event (emit). The most common system of events, where you need to create an event in one place, and react to it in the other. For example, receiving data from api. 

BehaviorSubjects - saves the last event (emit) data. If a lot of events are generated, but you need to respond only to the latter. For example, the reaction on the entering data in a text field

ReplaySubject - stores all events from the moment of its creation and gives all events to the listener. In case the event subscription is created later than the event itself is issued

*/
