interface Condition {
    isValid(): boolean;
}

interface FieldCondition extends Condition {
    page: string;
    field: string;
    value: string;
}

interface AlwaysTrue extends Condition {}

interface ConditionGroup {
    allOf: Condition[];
}

interface Question {
    type: string;
    shownIfAny: ConditionGroup[];
    label: string;
    description: string;
    requiredIfAny: ConditionGroup[]
}

interface TextQuestion extends Question {
    type: 'text';
    isLong: boolean;
    multiple: number;
}

interface EMailQuestion extends Question {
    type: 'email';
    multiple: number;
}

interface SelectQuestion extends Question {
    type: 'select';
    options: string[];
    selections: number;
}

interface BooleanQuestion extends Question {
    type: 'boolean'
}

interface Page {
    name: string;
    description: string;
    shownIfany: ConditionGroup[];
    questions: Question[];
}

interface ShortLink {
    name: string;
    id: string;
}

interface Form {
    name: string;
    slug: string;
    pages: Page[];
    showProgress: boolean;
    public: boolean;
    links: ShortLink[];
}

interface Organisation {
    name: string;
    forms: Form[];
    slug: string;
    privacyLink: string;
    imprintLink: string;
}
