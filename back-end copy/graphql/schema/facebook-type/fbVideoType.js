var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../../API/fbAPI').getField;
var getEdge = require('../../../API/fbAPI').getEdge;

const fbVideoType = module.exports = new GraphQLObjectType({
	name: 'fbVideo',
	description: 'Represents an individual video on Facebook.',
	fields: () => ({
		/*-----------------------------------fields--------------------------*/
		backdated_time_granularity: {type:GraphQLString,
										resolve: ({id}) => getField({id},'backdated_time_granularity')},
		content_category:			{type:GraphQLString,
										resolve: ({id}) => getField({id},'content_category')},
		created_time:				{type:GraphQLString,
										resolve: ({id}) => getField({id},'created_time')},
		description:				{type:GraphQLString},
		embed_html:					{type:GraphQLString,
										resolve: ({id}) => getField({id},'embed_html')},
		id:							{type:GraphQLString},
		backdated_time:				{type:GraphQLString,
										resolve: ({id}) => getField({id},'backdated_time')},
		event:						{type:fbEventType,
										resolve: ({id}) => getField({id},'event')},
		format:						{type: new GraphQLList(fbVideoFormatType),
										resolve: ({id}) => getField({id},'format')},
		from:						{// profile
										type:fbProfileType,
										resolve: ({id}) => getField({id},'from')},
		icon:						{type:GraphQLString,
										resolve: ({id}) => getField({id},'icon')},
		length:						{type:GraphQLFloat,
										resolve: ({id}) => getField({id},'length')},
		permalink_url:				{type:GraphQLString,
										resolve: ({id}) => getField({id},'permalink_url')},
		picture:					{type:GraphQLString,
										resolve: ({id}) => getField({id},'picture')},
		place:						{type:fbPlaceType,
										resolve: ({id}) => getField({id},'place')},
		source:						{type:GraphQLString,
										resolve: ({id}) => getField({id},'source')},
		title:						{type:GraphQLString,
										resolve: ({id}) => getField({id},'title')},
		universal_video_id:			{type:GraphQLString,
										resolve: ({id}) => getField({id},'universal_video_id')},
		updated_time:				{type:GraphQLString},
		/*---------------------------------edges----------------------*/
		captions:					{ type: new GraphQLList(fbVideoCaptionType),
										resolve: ({id}) => getEdge({id},'captions')},
		comments:					{ type: new GraphQLList(fbCommentType),
										resolve: ({id}) => getEdge({id},'comments')},
		likes:						{ type: new GraphQLList(fbLikeType),
										resolve: ({id}) => getEdge({id},'likes')},
		reactions:					{ type: new GraphQLList(fbReactionType),
										resolve: ({id}) => getEdge({id},'reactions')},
		sharedposts:				{ type: new GraphQLList(fbPostType),
										resolve: ({id}) => getEdge({id},'sharedposts')},
		sponsor_tags:				{ type: new GraphQLList(fbPageType),
										resolve: ({id}) => getEdge({id},'sponsor_tags')},
		tags:						{ type: new GraphQLList(fbTaggableSubjectType2),
										resolve: ({id}) => getEdge({id},'tags')},
		thumbnails:					{ type: new GraphQLList(fbThumnailType),
										resolve: ({id}) => getEdge({id},'thumbnails')}
	})
});
const fbTaggableSubjectType2 = new GraphQLObjectType({
	name:'fbTaggableSubject2',
	description:'Represents an object can be tagged in some content',
	fields:()=>({
		id:				{type:GraphQLString},
		name:			{type:GraphQLString},
		created_time:	{type:GraphQLString}
	})
});
const fbVideoFormatType = new GraphQLObjectType({
	name:'fbVideoFormat',
	description:'The different formats of the video.',
	fields: ()=>({
		embed_html:	{type:GraphQLString},
		filter:		{type:GraphQLString},
		height:		{type: GraphQLInt},
		picture:	{type:GraphQLString},
		width:		{type:GraphQLInt}
	})
});
const fbVideoCaptionType = new GraphQLObjectType({
	name:'fbVideoCaption',
	description:'Captions for the video.',
	fields: ()=>({
		created_time:	{type:GraphQLInt},
		locale:			{type:GraphQLString},
		locale_name:	{type:GraphQLString},
		url:			{type:GraphQLString}		
	})	
});
const fbEventType = require('./fbEventType');
const fbUserType = require('./fbUserType');
const fbPlaceType = require('./fbPlaceType');
const fbCommentType = require('./fbCommentType');
const fbLikeType = require('./fbLikeType');
const fbReactionType = require('./fbReactionType');
const fbPostType = require('./fbPostType');
const fbPageType = require('./fbPageType');
const fbThumnailType = require('./fbThumbnailType');
const fbProfileType = require('./fbProfileType');
//console.log(profileType);

